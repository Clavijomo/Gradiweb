import './styles/header.scss';

const topBarContent = document.querySelector('.top-bar__content');
const toggleButton = document.querySelector('.header__menu__toggle');
const navMenu = document.querySelector('.header__nav');
const header = document.querySelector('.header');
const message = 'FREE SHIPPING FOR ORDERS OVER $100';

const repeatCount = 100;

for (let i = 0; i < repeatCount; i++) {
    const span = document.createElement('span');
    span.textContent = message;
    span.style.marginRight = '2rem';
    topBarContent.appendChild(span);
}

toggleButton.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    header.classList.toggle('menu-open');

    if (isOpen) {
        toggleButton.textContent = 'X';
        toggleButton.setAttribute('aria-label', 'Close navigation');
    } else {
        toggleButton.textContent = '☰';
        toggleButton.setAttribute('aria-label', 'Open navigation');
    }
});