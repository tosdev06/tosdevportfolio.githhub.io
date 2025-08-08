  // Slideshow functionality
        let index = 0;
        const slides = document.querySelectorAll(".slideshow img");
        const textOverlay = document.querySelector(".text-overlay");
        const header = document.querySelector(".header"); 
        
        const slideTexts = [
            {
                title: "Innovative Solutions for Your Digital Needs",
                subtitle: "We combine creativity with technical expertise to deliver exceptional results"
            },
            {
                title: "💻 Custom Software Development",
                subtitle: "Tailored solutions that grow with your business"
            },
            {
                title: "📈 Data-Driven Decision Making",
                subtitle: "Transform your data into actionable insights"
            },
            {
                title: "🌐 Your Vision, Our Expertise",
                subtitle: "Let's build something amazing together"
            },
            {
                title: "🔒 Secure & Scalable Solutions",
                subtitle: "Performance and security you can trust"
            }
        ];

        function showNextSlide() {
            slides[index].classList.remove("active");
            index = (index + 1) % slides.length;
            slides[index].classList.add("active");
            
            // Update text overlay with animation
            textOverlay.style.opacity = 0;
            setTimeout(() => {
                textOverlay.querySelector('h1').textContent = slideTexts[index].title;
                textOverlay.querySelector('p').textContent = slideTexts[index].subtitle;
                textOverlay.style.opacity = 1;
            }, 500);
        }

        setInterval(showNextSlide, 5000);

        // Header scroll effect
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("scrolled"); 
            } else {
                header.classList.remove("scrolled"); 
            }
        });

        // Mobile menu toggle
        document.addEventListener("DOMContentLoaded", function () {
            const menuToggle = document.querySelector(".menu-toggle");
            const menu = document.querySelector(".menu");
            
            menuToggle.addEventListener("click", function () {
                menu.classList.toggle("active");
                menuToggle.querySelector('i').classList.toggle("fa-times");
                menuToggle.querySelector('i').classList.toggle("fa-bars");
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        if (menu.classList.contains('active')) {
                            menu.classList.remove('active');
                            menuToggle.querySelector('i').classList.toggle("fa-times");
                            menuToggle.querySelector('i').classList.toggle("fa-bars");
                        }
                    }
                });
            });
            
            // Scroll reveal animation
            const revealElements = document.querySelectorAll('.reveal');
            
            function checkReveal() {
                const windowHeight = window.innerHeight;
                const revealPoint = 150;
                
                revealElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    
                    if (elementTop < windowHeight - revealPoint) {
                        element.classList.add('active');
                    }
                });
            }
            
            window.addEventListener('scroll', checkReveal);
            window.addEventListener('load', checkReveal);

            // Form submission
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Get form values
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const subject = document.getElementById('subject').value;
                    const message = document.getElementById('message').value;
                    
                    // Here you would typically send the data to a server
                    // For demonstration, we'll just show an alert
                    alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}.`);
                    
                    // Reset the form
                    contactForm.reset();
                });
            }
        });
