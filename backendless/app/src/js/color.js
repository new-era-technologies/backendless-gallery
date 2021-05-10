'use strict';

const changeColorButtons = document.querySelectorAll('.change'),
    headerWrapper = document.querySelector('.header__wrapper'),
    mainWrapper = document.querySelector('.main__wrapper'),
    footerWrapper = document.querySelector('.footer__wrapper');

for (let i = 0; i < changeColorButtons.length; i++) {
    changeColorButtons[i].addEventListener('click', function () {
        changeColor(this.value);
    })
}

function changeColor(val) {
    switch (val) {
        case 'light':
            alert('light mode');
            break;
        case 'dark':
            headerWrapper.classList.add('dark-header-wrapper');
            mainWrapper.classList.add('dark-main-wrapper');
            footerWrapper.classList.add('dark-footer-wrapper');
            break;
        case 'backendless':
            alert('backendless mode');
            break;
        default:
            alert('light mode');
    }
}