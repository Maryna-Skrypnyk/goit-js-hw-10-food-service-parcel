import menuCardsTpl from './templates/menu.hbs';
import menu from './menu.json';
import './sass/main.scss';

const menuRef = document.querySelector('.js-menu');
const menuMarkup = menuCardsTpl(menu);
menuRef.insertAdjacentHTML('beforeend', menuMarkup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// document.body.classList.add(Theme.LIGHT);

const themeRef = document.querySelector('#theme-switch-toggle');

themeRef.addEventListener('change', onThemeChange);

function onThemeChange(e) {
  document.body.classList.add(Theme.LIGHT);
  if (e.target.checked) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
  } else {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
  }
  localStorage.setItem('theme', document.body.classList.value);
}

function savedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.value = savedTheme;

    if (savedTheme === Theme.DARK) {
      themeRef.checked = true;
    }
  }
}

savedTheme();
