import './styles/header.scss';
import './styles/hero-banner.scss';
import './styles/carrousel-products.scss';
import './styles/footer.scss';
import './styles/latest-collection.scss';

const topBarContent = document.querySelector('.top-bar__content');
const heroBanner = document.querySelector('.hero-banner__marquee');
const toggleButton = document.querySelector('.header__menu__toggle');
const navMenu = document.querySelector('.header__nav');
const message = 'FREE SHIPPING FOR ORDERS OVER $100';
const header = document.querySelector('.header');
const messageMarquee = 'SHUFFLE ESSENTIALS';
const heroIconPath = './assets/star.svg'

const repeatCount = 100;

function generateHeroMarquee(container, message, repeatCount, iconPath) {
    if (!container) return;

    for (let i = 0; i < repeatCount; i++) {
        const span = document.createElement('span');
        span.textContent = message;
        span.style.marginRight = '2rem';
        container.appendChild(span);

        if (i < repeatCount - 1) {
            const img = document.createElement('img');
            img.src = iconPath;
            img.alt = 'Star icon';
            img.style.width = '80px';
            img.style.height = '80px';
            img.style.marginRight = '1rem';
            container.appendChild(img);
        }
    }
}

function generateTopBarMarquee(container, message, repeatCount) {
    if (!container) return;

    for (let i = 0; i < repeatCount; i++) {
        const span = document.createElement('span');
        span.textContent = message;
        span.style.marginRight = '2rem';
        container.appendChild(span);
    }
}

if (topBarContent) {
    generateTopBarMarquee(topBarContent, message, repeatCount);
}

if (heroBanner) {
    generateHeroMarquee(heroBanner, messageMarquee, repeatCount, heroIconPath);
}

toggleButton.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    header.classList.toggle('menu-open');

    toggleButton.textContent = isOpen ? 'X' : '☰';
    toggleButton.style.color = isOpen ? 'white' : '#6f42c1'
    toggleButton.setAttribute(
        'aria-label',
        isOpen ? 'Close navigation menu' : 'Open navigation menu'
    )
});