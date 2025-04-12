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

const slider = document.querySelector('.testimonial-slider');
const slides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');



let currentSlide = 0;
const slideWidth = 100;

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
setInterval(() => {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    updateSlider();
}, 5000);

const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

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

emailjs.init('FTjPZ4K2o8Dg4BQBb');;

document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const submitButton = document.querySelector('.submit-btn');
    const originalButtonText = submitButton.innerHTML;

    // Add loader to the button
    submitButton.innerHTML = '<span class="loader"></span> Sending...';
    submitButton.disabled = true;

    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
        alert('Please complete the reCAPTCHA to proceed.');
        submitButton.innerHTML = originalButtonText; // Reset button text
        submitButton.disabled = false;
        return;
    }

    print(recaptcha_result);

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('https://nummstudio.up.railway.app/api/contact/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                subject,
                message,
                recaptcha_response: recaptchaResponse
            })
        });

        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset(); // Reset the form
            grecaptcha.reset(); // Reset reCAPTCHA
        } else {
            const errorData = await response.json();
            alert(errorData.error || 'Failed to send message. Please try again later.');
        }
    } catch (error) {
        alert('An error occurred. Please try again later.');
    } finally {
        // Reset button text and state
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
    }

    print(emailjs_response.json());
});
