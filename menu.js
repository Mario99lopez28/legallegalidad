// Menú móvil
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Ajustar el padding del hero cuando el menú está abierto
const header = document.querySelector('header');
const hero = document.querySelector('.hero');

navLinks.addEventListener('transitionend', () => {
  if (navLinks.classList.contains('active')) {
    hero.style.paddingTop = `${header.offsetHeight + navLinks.offsetHeight}px`;
  } else {
    hero.style.paddingTop = `${header.offsetHeight}px`;
  }
});