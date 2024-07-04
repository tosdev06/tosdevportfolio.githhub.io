document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const toggle = document.getElementById('toggle');
    const body = document.body;

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    toggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you! Your form has been submitted.');
        contactForm.reset();
    });

    const sliders = document.querySelectorAll('.slider');

    sliders.forEach((slider, index) => {
        const slides = slider.querySelector('.slides');
        const images = slides.querySelectorAll('.slide');
        let currentIndex = 0;

        function showSlide(n) {
            slides.style.transform = `translateX(${-n * 100}%)`;
        }

        function plusSlides(n) {
            currentIndex += n;
            if (currentIndex >= images.length) currentIndex = 0;
            if (currentIndex < 0) currentIndex = images.length - 1;
            showSlide(currentIndex);
        }

        slider.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
        slider.querySelector('.next').addEventListener('click', () => plusSlides(1));

        showSlide(currentIndex);
    });
});
