window.addEventListener('load',function(){
	new Glider(document.querySelector('.carousel__lista'),{
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  dots: '.carousel__indicadores',
	  arrows: {
	    prev: '.carousel__anterior',
	    next: '.carousel__siguiente'
	    }
	});
});

function redirecc1(){
	window.location.href = "https://www.youtube.com/channel/UCZzpi73Hiik-BXGeCKh23uw";
}

function rec(){
	window.location.href = "https://www.instagram.com/luis_c_hdz007/";
}
