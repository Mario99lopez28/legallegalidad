// modo.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle-theme');
  const body = document.body;

  // guardar modo preferido
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
  }

  toggle.addEventListener('click', () => {
    const current = body.getAttribute('data-theme');
    const newTheme = current === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
});

