// document.addEventListener('DOMContentLoaded', function() {
//     const menuIcon = document.querySelector('.menu .icon');
//     const menuLinks = document.querySelector('.menu');
    
//     menuIcon.addEventListener('click', function() {
//         menuLinks.classList.toggle('active');
//     });
    
//     const navbarLinks = document.querySelectorAll('.menu a[href^="#"]');
    
//     navbarLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);
            
//             if (targetElement) {
//                 window.scrollTo({
//                     top: targetElement.offsetTop - 0,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
    
//     const sections = document.querySelectorAll('section');
    
//     function fadeInOnScroll() {
//         sections.forEach(section => {
//             const rect = section.getBoundingClientRect();
//             if (rect.top < window.innerHeight - 100) {
//                 section.style.opacity = 1;
//                 section.style.transform = 'translateY(0)';
//             }
//         });
//     }
    
//     window.addEventListener('scroll', fadeInOnScroll);
//     fadeInOnScroll();

    
//     sections.forEach(section => {
//         section.style.opacity = 0;
//         section.style.transform = 'translateY(50px)';
//         section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//     });
// });

// -------------------

// document.addEventListener('DOMContentLoaded', function() {
//     // 1. Menu Mobile Toggle
//     const menuIcon = document.querySelector('.menu .icon');
//     const menuLinks = document.querySelector('.menu');
    
//     menuIcon.addEventListener('click', function() {
//         menuLinks.classList.toggle('active');
//     });
    
//     // 2. Smooth Scroll for Navbar Links
//     const navbarLinks = document.querySelectorAll('.menu a[href^="#"]');
    
//     navbarLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);
            
//             if (targetElement) {
//                 window.scrollTo({
//                     top: targetElement.offsetTop - 80,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });

//     // 3. Fade-in Effect on Scroll for Sections
//     const sections = document.querySelectorAll('section');

//     // Função para animar seções visíveis
//     function fadeInOnScroll() {
//         sections.forEach(section => {
//             const rect = section.getBoundingClientRect();
//             if (rect.top < window.innerHeight - 100) {
//                 section.style.opacity = 1;
//                 section.style.transform = 'translateY(0)';
//             }
//         });
//     }

//     // Estilo inicial para as seções
//     sections.forEach(section => {
//         section.style.opacity = 0;
//         section.style.transform = 'translateY(50px)';
//         section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//     });

//     // Chamar a animação imediatamente para os elementos visíveis no carregamento
//     fadeInOnScroll();

//     // Adiciona o evento de scroll para animar o resto
//     window.addEventListener('scroll', fadeInOnScroll);
// });

// -----------------------------

document.addEventListener('DOMContentLoaded', function() {
    // 1. Menu Mobile Toggle
    const menuIcon = document.querySelector('.menu .icon');
    const menuLinks = document.querySelector('.menu');
    
    menuIcon.addEventListener('click', function() {
        menuLinks.classList.toggle('active');
    });
    
    // 2. Smooth Scroll for Navbar Links
    const navbarLinks = document.querySelectorAll('.menu a[href^="#"]');
    
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
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

    // 3. Fade-in Effect on Scroll for Sections
    const sections = document.querySelectorAll('section');

    function fadeInOnScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100;
            
            // Anima apenas se a seção estiver visível e ainda não tiver sido animada
            if (isVisible && section.style.opacity === '0') {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            }
        });
    }

    // Configurações iniciais para as seções
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Chamar a animação imediatamente para os elementos visíveis no carregamento
    fadeInOnScroll();

    // Adiciona eventos para garantir que a última seção apareça corretamente
    window.addEventListener('scroll', fadeInOnScroll);
    window.addEventListener('resize', fadeInOnScroll);
    window.addEventListener('load', fadeInOnScroll);
});
