export function generateHeroMarquee(container, message, repeatCount, iconPath) {
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

export function generateTopBarMarquee(container, message, repeatCount) {
    if (!container) return;

    for (let i = 0; i < repeatCount; i++) {
        const span = document.createElement('span');
        span.textContent = message;
        span.style.marginRight = '2rem';
        container.appendChild(span);
    }
}