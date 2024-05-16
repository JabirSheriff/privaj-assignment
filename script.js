 // Get slider element
 let slider = document.querySelector('.slider');
 // Initialize current slide index
 let currentSlide = 0;

 // Function to move to the next slide
 function nextSlide() {
     // Calculate the translation distance for sliding
     let translateX = -currentSlide * 50;
     // Apply the translation to the slider
     slider.style.transform = `translateX(${translateX}%)`;
     // Update the current slide index
     currentSlide = (currentSlide + 1) % 2; // 2 slides
 }

 // Automatically change slide every 5 seconds
 setInterval(nextSlide, 5000);



//  about
document.addEventListener("DOMContentLoaded", function() {
    var aboutSection = document.querySelector(".about-section");

    aboutSection.addEventListener("click", function() {
        // Toggle the "active" class on the about section
        aboutSection.classList.toggle("active");
    });
});
