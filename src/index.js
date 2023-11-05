import './style.css';

const footer = document.querySelector('footer');
const footerBack = document.querySelector('.footer-back')
const headerImg = document.querySelector('header img')
const aboutMe = document.querySelector('.about-me-panel')
const headerSpan = document.querySelector('.profile-picture span')


let headerImgBottom = Number(headerImg.getBoundingClientRect().top) + Number(getComputedStyle(headerImg).height.slice(0, -2))
let aboutMeBottom = Number(aboutMe.getBoundingClientRect().top) + Number(getComputedStyle(aboutMe).height.slice(0, -2))

let bottomDifference = headerImgBottom - aboutMeBottom;

headerSpan.style.bottom = `calc(-${bottomDifference}px + 5rem)`

const setspanBottom = () => {
  headerImgBottom = Number(headerImg.getBoundingClientRect().top) + Number(getComputedStyle(headerImg).height.slice(0, -2))
  aboutMeBottom = Number(aboutMe.getBoundingClientRect().top) + Number(getComputedStyle(aboutMe).height.slice(0, -2))

  bottomDifference = headerImgBottom - aboutMeBottom;

  headerSpan.style.bottom = `calc(-${bottomDifference}px + 5rem)`
}

window.addEventListener('resize', setspanBottom)

footerBack.style.height = getComputedStyle(footer).height;

const setHeight = () => {
  footerBack.style.height = getComputedStyle(footer).height;
}

window.addEventListener('resize', setHeight)