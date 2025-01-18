export function attachSmoothScrollToLinks(linkSelector, buttonSelector) {
    const links = document.querySelectorAll(linkSelector);
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            link.addEventListener('click', event => {
                event.preventDefault();
                const targetId = href.slice(1);
                smoothScrollTo(targetId);
            });
        } else {
            console.warn(`Invalid href detected: ${href}`);
        }
    });

    const buttons = document.querySelectorAll(buttonSelector);
    buttons.forEach(button => {
        const targetId = button.dataset.target;
        if (targetId) {
            button.addEventListener('click', () => {
                smoothScrollTo(targetId);
            });
        } else {
            console.warn(`Invalid data-target detected: ${button.outerHTML}`);
        }
    });
}

export function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 120,
            behavior: 'smooth',
        });
    }
}
