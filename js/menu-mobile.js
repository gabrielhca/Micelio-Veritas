const mobileButton = document.querySelector('.mobile-button');
const navMenu = document.querySelector('.header-menu');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  navMenu.classList.toggle('ativo');
  mobileButton.classList.toggle('ativo');
  const ativo = navMenu.classList.contains('ativo');
  mobileButton.setAttribute('aria-expanded', ativo);
  if (ativo) {
    mobileButton.setAttribute('aria-label', 'Fechar Menu');
  } else {
    mobileButton.setAttribute('aria-label', 'Abrir Menu');
  }
}

mobileButton.addEventListener('click', toggleMenu);
mobileButton.addEventListener('touchstart', toggleMenu);
