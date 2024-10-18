const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navegacion--cabecera');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
