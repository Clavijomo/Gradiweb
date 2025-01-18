import '../styles/header.scss';
import '../styles/hero-banner.scss';
import '../styles/carrousel-products.scss';
import '../styles/footer.scss';
import '../styles/latest-collection.scss';
import settingsData from '../../config/settings_data.json';
import { generateHeroMarquee, generateTopBarMarquee } from './marquee';
import { attachToggleMenu } from './toggleMenu';
import { attachSmoothScrollToLinks } from './smoothScroll';
import { renderAdditionalProducts } from './products';

const sections = settingsData.sections;
const topBarContent = document.querySelector('.top-bar__content');
const heroBanner = document.querySelector('.hero-banner__marquee');
const toggleButton = document.querySelector('.header__menu__toggle');
const navMenu = document.querySelector('.header__nav');
const message = 'FREE SHIPPING FOR ORDERS OVER $100';
const header = document.querySelector('.header');
const messageMarquee = sections.heroBanner.settings.marquee_text;
const heroIconPath = './assets/star.svg'
const viewAllButton = document.querySelector('#view-all-button');
const repeatCount = 100;
const productsList = document.querySelector('#products-list');

if (topBarContent) {
    generateTopBarMarquee(topBarContent, message, repeatCount);
}

if (heroBanner) {
    generateHeroMarquee(heroBanner, messageMarquee, repeatCount, heroIconPath);
}

attachToggleMenu(toggleButton, navMenu, header);
attachSmoothScrollToLinks('.header__nav__list__item__link', null);
attachSmoothScrollToLinks('.section-information__list-buttons-footer a', '.section-information__list-buttons-footer button');
viewAllButton.addEventListener('click', () => renderAdditionalProducts(productsList, viewAllButton));