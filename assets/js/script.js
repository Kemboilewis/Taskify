const toggleButtonX = document.querySelector('.navigation-menu span .fa-x');
const toggleButtonBars = document.querySelector(
  '.navigation-menu span .fa-bars'
);
const toggleNavigationMenu = document.querySelector('.sm-navigation-menu');

toggleButtonX.style.display = 'none';

const toggleButtonHander = () => {
  toggleButtonBars.style.display = 'none';
  toggleButtonX.style.display = 'block';
  toggleNavigationMenu.style.display = 'block';
};

toggleButtonBars.addEventListener('click', toggleButtonHander);
toggleButtonX.addEventListener('click', () => {
  toggleButtonBars.style.display = 'block';
  toggleButtonX.style.display = 'none';
  toggleNavigationMenu.style.display = 'none';
});
