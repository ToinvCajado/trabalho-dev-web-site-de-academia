document.addEventListener('DOMContentLoaded', function () {
    // 1. Menu Mobile Toggle
    const menuIcon = document.querySelector('.menu .icon');
    const menuLinks = document.querySelector('.menu');

    menuIcon.addEventListener('click', function () {
        menuLinks.classList.toggle('active');
    });

    // 2. Smooth Scroll for Navbar Links
    const navbarLinks = document.querySelectorAll('.menu a[href^="#"]');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Fade-in Animation on Scroll for Sections
    const sections = document.querySelectorAll('.content, .yellow-section');

    function fadeInOnScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100;

            if (isVisible && section.style.opacity === '0') {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            }
        });
    }

    // Initial styles for sections
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Run animation on load and scroll
    fadeInOnScroll();
    window.addEventListener('scroll', fadeInOnScroll);
    window.addEventListener('resize', fadeInOnScroll);
    window.addEventListener('load', fadeInOnScroll);

    // 4. WhatsApp Icon Animation
    const whatsappIcon = document.querySelector('.whatsapp-icon');

    function animateWhatsApp() {
        whatsappIcon.style.transform = 'scale(1.1)';
        setTimeout(() => {
            whatsappIcon.style.transform = 'scale(1)';
        }, 500);
    }

    setInterval(animateWhatsApp, 2000);
});
