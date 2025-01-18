import products from '../../data/products.json';

export function fetchAdditionalProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const additionalProducts = products.slice(4);
            resolve(additionalProducts);
        }, 150);
    });
}

export async function renderAdditionalProducts(productsList, viewAllButton) {
    try {
        const additionalProducts = await fetchAdditionalProducts();

        additionalProducts.forEach((product) => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card', 'hidden');
            const tagsHTML = product.tags
                ? `<ul class="product-card__list-tags">
                    ${product.tags.map(tag => `<li>${tag} | </li>`).join('')}
                   </ul>`
                : '';

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
                        ${tagsHTML}
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