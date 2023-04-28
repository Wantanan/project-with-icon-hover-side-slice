// https://youtu.be/gXkqy0b4M5g
const hamburger =document.querySelector(".hamburger");
const navLinks =document.querySelector(".nav-links");
const links =document.querySelector(".nav-links li");

hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("open");
	
});

