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

emailjs.init('FTjPZ4K2o8Dg4BQBb');
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const submitButton = document.querySelector('.submit-btn');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = '<span class="loader"></span> Sending...';
    submitButton.disabled = true;

    const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      title: document.getElementById("subject").value,
      message: document.getElementById("message").value
    };

    emailjs.send("service_ikbi12u", "template_96pk7pe", templateParams)
      .then(function(response) {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
      }, function(error) {
        alert("Failed to send message. Please try again later.");
        console.error("EmailJS error:", error);
      })
      .finally(() => {
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
      });
  });