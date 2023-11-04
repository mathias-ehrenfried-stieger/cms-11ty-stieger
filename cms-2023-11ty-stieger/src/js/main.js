import * as MainNav from './lib/mainnav.js';
window.MainNav = MainNav;
const nav = document.querySelector('nav');
const open = document.querySelector('.open');
const close = document.querySelector('.nav-button');


close.addEventListener ('click', () => {
    if(nav.classList.contains('hidden')){
    nav.classList.remove('hidden');
    close.classList.add('hidden');
} else {
    nav.classList.add('hidden');
    close.classList.remove('hidden');   
  }
});

open.addEventListener ('click', () => {
  nav.classList.add('hidden');
  close.classList.remove('hidden');
});


