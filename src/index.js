import './style.css';

const footer = document.querySelector('footer');
const footerBack = document.querySelector('.footer-back')

footerBack.style.height = getComputedStyle(footer).height;

const setHeight = () => {
  footerBack.style.height = getComputedStyle(footer).height;
}

window.addEventListener('resize', setHeight)