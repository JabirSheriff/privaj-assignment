 let slider = document.querySelector('.slider');
 
 let currentSlide = 0;

 
 function nextSlide() {
     
     let translateX = -currentSlide * 50;
     
     slider.style.transform = `translateX(${translateX}%)`;
     
     currentSlide = (currentSlide + 1) % 2; 
 }

 
 setInterval(nextSlide, 5000);



//  about
document.addEventListener("DOMContentLoaded", function() {
    var aboutSection = document.querySelector(".about-section");

    aboutSection.addEventListener("click", function() {
        
        aboutSection.classList.toggle("active");
    });
});
