import './styles/header.scss';
import './styles/hero-banner.scss';
import './styles/carrousel-products.scss';
import './styles/footer.scss';
import './styles/latest-collection.scss';

import products from '../data/products.json';

const topBarContent = document.querySelector('.top-bar__content');
const heroBanner = document.querySelector('.hero-banner__marquee');
const toggleButton = document.querySelector('.header__menu__toggle');
const navMenu = document.querySelector('.header__nav');
const message = 'FREE SHIPPING FOR ORDERS OVER $100';
const header = document.querySelector('.header');
const messageMarquee = 'SHUFFLE ESSENTIALS';
const heroIconPath = './assets/star.svg'
const viewAllButton = document.querySelector('#view-all-button');
const repeatCount = 100;

const productsList = document.querySelector('#products-list');

function fetchAdditionalProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const additionalProducts = products.slice(4);
            resolve(additionalProducts);
        }, 500);
    });
}

async function renderAdditionalProducts() {
    try {
        const additionalProducts = await fetchAdditionalProducts();

        additionalProducts.forEach((product) => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card', 'hidden');

            productCard.innerHTML = `
                <div class="product-card__container-image">
                    <img
                        class="product-card__image-product"
                        src="${product.image}"
                        alt="${product.title}"
                        width="100%"
                        height="100%"
                    />
                </div>
                <div class="product-card__container-actions-product">
                    <div class="product-card__container-actions-product__container-description">
                        <h3 class="product-card__title-product">${product.title}</h3>
                        <p class="product-card__text-price">$${product.price.toFixed(2)}</p>
                    </div>
                    <button class="product-card__button">
                        <img src="./assets/shop.svg" alt="Cart icon" width="20" />
                    </button>
                </div>
            `;

            productsList.appendChild(productCard);

            setTimeout(() => {
                productCard.classList.remove('hidden');
                productCard.classList.add('fade-in');
            }, 100);
        });

        viewAllButton.style.display = 'none';
    } catch (error) {
        console.error('Error fetching additional products:', error);
    }
}

viewAllButton.addEventListener('click', renderAdditionalProducts);

document.querySelectorAll('.header__nav__list__item__link').
    forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            smoothScrollTo(targetId);
        });
    })

document.querySelectorAll('.section-information__list-buttons-footer button').forEach((button) => {
    button.addEventListener('click', () => {
        const targetId = button.textContent.trim().replace(/\s+/g, '-').toLowerCase();
        smoothScrollTo(targetId);
    });
});

function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 120,
            behavior: 'smooth'
        });
    }
}

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