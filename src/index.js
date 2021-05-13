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

const THEME_KEY = 'theme';

const themeRef = document.querySelector('#theme-switch-toggle');

themeRef.addEventListener('change', onThemeChange);

function onThemeChange() {
  replaceTheme(Theme.LIGHT, Theme.DARK);

  localStorage.setItem(THEME_KEY, document.body.classList.value);
}

function replaceTheme(oldTheme, newTheme) {
  document.body.classList.add(oldTheme);

  themeRef.checked
    ? document.body.classList.replace(oldTheme, newTheme)
    : document.body.classList.replace(newTheme, oldTheme);
}

function savedTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    document.body.classList.value = savedTheme;

    themeRef.checked = savedTheme === Theme.DARK;

    // if (savedTheme === Theme.DARK) {
    //   themeRef.checked = true;
    // }
  }
}

savedTheme();

// -----------------------------------
// Альтернативний запис функцій

// function onThemeChange(e) {
//   if (e.target.checked) {
//     replaceTheme(Theme.LIGHT, Theme.DARK);
//   } else {
//     replaceTheme(Theme.DARK, Theme.LIGHT);
//   }

//   localStorage.setItem(THEME_KEY, document.body.classList.value);
// }

// function replaceTheme(oldTheme, newTheme) {
//   document.body.classList.add(oldTheme);
//   document.body.classList.replace(oldTheme, newTheme);
// }
