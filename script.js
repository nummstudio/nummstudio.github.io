
        // Custom cursor
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');
        
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1
            });
            
            gsap.to(cursorFollower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3
            });
        });
        
        // Links hover effect
        const links = document.querySelectorAll('a, button');
        
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                gsap.to(cursor, {
                    scale: 1.5,
                    duration: 0.3
                });
                gsap.to(cursorFollower, {
                    scale: 0,
                    duration: 0.3
                });
            });
            
            link.addEventListener('mouseleave', () => {
                gsap.to(cursor, {
                    scale: 1,
                    duration: 0.3
                });
                gsap.to(cursorFollower, {
                    scale: 1,
                    duration: 0.3
                });
            });
        });
        
        // Hero animations
        window.addEventListener('load', () => {
            const heroLines = document.querySelectorAll('.hero h1 .line');
            const heroPara = document.querySelector('.hero p');
            const heroBtn = document.querySelector('.hero .cta-btn');
            gsap.to(heroPara, {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 1.2,
                ease: 'power3.out'
            });
            
            gsap.to(heroBtn, {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 1.4,
                ease: 'power3.out'
            });
        });
        
        // Scroll animations
        // gsap.registerPlugin(ScrollTrigger);
        
        // gsap.utils.toArray('.service-card').forEach(card => {
        //     gsap.from(card, {
        //         y: 50,
        //         opacity: 0,
        //         duration: 1,
        //         scrollTrigger: {
        //             trigger: card,
        //             start: 'top 80%',
        //             toggleActions: 'play none none none'
        //         }
        //     });
        // });
        
        // gsap.utils.toArray('.portfolio-item').forEach(item => {
        //     gsap.from(item, {
        //         scale: 0.9,
        //         opacity: 0,
        //         duration: 0.8,
        //         scrollTrigger: {
        //             trigger: item,
        //             start: 'top 80%',
        //             toggleActions: 'play none none none'
        //         }
        //     });
        // });
        
        // gsap.utils.toArray('.pricing-card').forEach(card => {
        //     gsap.from(card, {
        //         y: 50,
        //         opacity: 0,
        //         duration: 1,
        //         scrollTrigger: {
        //             trigger: card,
        //             start: 'top 80%',
        //             toggleActions: 'play none none none'
        //         }
        //     });
        // });
        
        // Testimonial slider
        const slider = document.querySelector('.testimonial-slider');
        const slides = document.querySelectorAll('.testimonial-slide');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        
        let currentSlide = 0;
        const slideWidth = 100; // percentage
        
        function updateSlider() {
            slider.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
        }
        
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
            updateSlider();
        });
        
        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
            updateSlider();
        });
        
        // Auto slide
        setInterval(() => {
            currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
            updateSlider();
        }, 5000);
        
        // Navbar scroll effect
        const nav = document.querySelector('.nav');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
        
        // Back to top button
        const backToTopBtn = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                if (this.getAttribute('href') !== '#') {
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
