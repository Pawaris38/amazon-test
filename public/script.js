const arrowleft = document.getElementById("arrow-left");
const arrowright = document.getElementById("arrow-right");


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
 
  var slides = document.getElementsByClassName("slide");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
}

 arrowleft.addEventListener('click', function(){
    plusSlides(-1);
 });

arrowright.addEventListener('click', function(){
    plusSlides(1);
});
