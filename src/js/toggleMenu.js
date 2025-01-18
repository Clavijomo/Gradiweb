export function attachToggleMenu(toggleButton, navMenu, header) {
    toggleButton.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('active');
        header.classList.toggle('menu-open');

        toggleButton.textContent = isOpen ? 'X' : '☰';
        toggleButton.style.color = isOpen ? 'white' : '#6f42c1';
        toggleButton.setAttribute(
            'aria-label',
            isOpen ? 'Close navigation menu' : 'Open navigation menu'
        );
    });
}
