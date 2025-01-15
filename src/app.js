console.log('Gradiweb is online!!!');
import './styles/header.scss';

const topBarContent = document.querySelector('.top-bar__content');
const message = 'FREE SHIPPING FOR ORDERS OVER $100';

const repeatCount = 100;

for (let i = 0; i < repeatCount; i++) {
    const span = document.createElement('span');
    span.textContent = message;
    span.style.marginRight = '2rem';
    topBarContent.appendChild(span);
}