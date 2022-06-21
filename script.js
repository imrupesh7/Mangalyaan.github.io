const myslide = document.querySelectorAll('.bannerslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 5000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 5000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}

function scrollwin(){
	window.scrollTo(0,0)
}


//search box js start
	
var x = document.getElementById("bimal")

function showmenu(){
	bimal.style.right ="0%"
	
}

function hidemenu(){
	bimal.style.right ="-100%"
}

// search box js end

// preloader statrt

var preloader = document.getElementById("loading");
function myfunction(){
	preloader.style.display="none";
}

// preloader end

$(document).ready(function(){

	$(window).on('scroll load',function(){

		if($(window).scrollTop() > 0){
			$('.arrow').show();
		}
		else{
			$('.arrow').hide();
		}
	});
});





