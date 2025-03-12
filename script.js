        function toggleMenu() {
            document.querySelector('.nav-links').classList.toggle('active');
        }

        let slideIndex = [0];
        function changeSlide(n, slider) {
            let slides = document.querySelectorAll(`#slider${slider+1} .slide`);
            slideIndex[slider] = (slideIndex[slider] + n + slides.length) % slides.length;
            slides.forEach((slide, i) => slide.style.display = i === slideIndex[slider] ? 'block' : 'none');
        }

        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll(".slides").forEach((slider, index) => {
                let slides = slider.querySelectorAll(".slide");
                slides.forEach((slide, i) => slide.style.display = i === 0 ? 'block' : 'none');
                slideIndex[index] = 0;
            });
        });
