//  Navigation bar 

function ToggleNavItems() {
    let navItems = document.querySelectorAll('nav > a');
    for(let i = 0; i < navItems.length; i++){
        navItems[i].classList.toggle('visible-nav-item');
    }
}

var slideIndex = 1;
showSlides(slideIndex);

// Controls for next & previous 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// JavaScript for the image carousel 

function showSlides(n) {
  var i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i+=1) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  
}

