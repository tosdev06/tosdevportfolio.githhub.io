let index = 0;
const slides = document.querySelectorAll(".slideshow img");
const textOverlay = document.querySelector(".text-overlay");
const header = document.querySelector(".header"); 

function showNextSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");

  
    textOverlay.textContent = slideTexts[index];
}
const slideTexts = [
 
       
        "💻 We Build Stunning & Scalable Digital Solutions",
        "📈 Elevate Your Business with Cutting-Edge Technology",
        "🌐 Your Vision, Our Expertise – Let's Build Together",
        "🔒 Secure, Fast & Reliable Web Solutions for Your Brand",
        "🎯 Transforming Ideas into Powerful Digital Experiences"
    
    
];


setInterval(showNextSlide, 8000);


window.addEventListener("scroll", () => {
    console.log("ScrollY:", window.scrollY);
    if (window.scrollY > 50) {
        header.classList.add("fixed"); 
    } else {
        header.classList.remove("fixed"); 
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu ul");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
