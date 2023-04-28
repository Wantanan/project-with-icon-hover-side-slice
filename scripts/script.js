
// https://youtu.be/gXkqy0b4M5g
const hamburger =document.querySelector(".hamburger");
const navLinks =document.querySelector(".nav-links");
const links =document.querySelector(".nav-links li");

hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("open");
	
});

// ..................................script for photo slide index
		
//https://www.youtube.com/watch?v=bW8X-tt5AZQ
		var slides = document.querySelectorAll('.slide');
		var btns = document.querySelectorAll('.btn');
		let currentSlide = 1;
		
		//javescript for image slider
		var manualNav = function(manual){
			slides.forEach((slide) => {
				slide.classList.remove('active');
				
				btns.forEach((btn) => {
					btn.classList.remove('active');
				});
			});
			slides[manual].classList.add('active');
			btns[manual].classList.add('active');
		}
		btns.forEach((btn, i) => {
			btn.addEventListener("click",() => {
				manualNav(i)
				currentSlide = i;
			});
		});

//javascript for image auto slide
		var repeat = function(activeClass){
			let active = document.getElementsByClassName('active');
			let i = 1;
			
				var repeater = () => {
					setTimeout(function (){
					[...active].forEach((activeSlide) => {
						activeSlide.classList.remove('active');
					});
					
					slides[i].classList.add('active');
					btns[i].classList.add('active');
					i++;
					
					if(slides.length == i){
						i = 0;
					}
					if(i >= slides.length){
						return;
					}
					repeater();
					},5000);
				}
				repeater();
		}
		repeat();		

		
		
		
//------------------------script for review slide
var slideReview = 1;
showDivs(slideReview);

function plusDivs(m) {
  showDivs(slideReview += m);
}

function showDivs(m) {
  var j;
  var y = document.getElementsByClassName("slides");
  if (m > y.length) {slideReview = 1}
  if (m < 1) {slideReview = y.length}
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";  
  }
  y[slideReview-1].style.display = "block";  
}

// ,,,,,,,,,,,,,,,,,,,,,,,,script for aboutus page
function myFunction() {
	  var x = document.getElementById("mySidenav");
	  if (x.className === "sidenav") {
		x.className += " responsive";
	  } else {
		x.className = "sidenav";
	  }
	}











