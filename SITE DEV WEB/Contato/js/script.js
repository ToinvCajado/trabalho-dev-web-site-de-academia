// Animação do ícone de menu (para mobile)
const menuIcon = document.querySelector('.icon');
const navbarMenu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});

// Efeito de rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animação ao rolar a página para os elementos da seção "sobre"
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.about, .promo-section, .form-container');
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight - 100) {
      el.classList.add('animate');
    }
  });
});

// Animação ao enviar o formulário
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.classList.add('form-success');
  setTimeout(() => {
    alert('Formulário enviado com sucesso!');
    form.reset();
    form.classList.remove('form-success');
  }, 1000);
});

// Animação para o botão "Enviar"
const submitButton = document.querySelector('form button');
submitButton.addEventListener('mouseenter', () => {
  submitButton.style.transform = 'scale(1.1)';
});
submitButton.addEventListener('mouseleave', () => {
  submitButton.style.transform = 'scale(1)';
});
