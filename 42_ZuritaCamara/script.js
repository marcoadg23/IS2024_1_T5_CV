const tabs = document.querySelectorAll(".info__tab");
const tabsContainer = document.querySelector(".info__tab-contenedor");
const tabsContent = document.querySelectorAll(".info__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".info__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("info__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("info__content--active"));

  // Activate tab
  clicked.classList.add("info__tab--active");

  // Activate content area
  document
    .querySelector(`.info__content--${clicked.dataset.tab}`)
    .classList.add("info__content--active");
});
