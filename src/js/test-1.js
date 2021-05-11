import menuCardTpl from '../templates/test-1.hbs';
import menu from '../menu.json';
import '../sass/main.scss';

// console.log(menuCardTpl(menu[0]));

const menuRef = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menu);
menuRef.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkup(menu) {
  //   return menu.map(name => menuCardTpl(name)).join('');
  return menu.map(menuCardTpl).join('');
}
