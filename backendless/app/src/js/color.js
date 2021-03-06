'use strict';

const changeColorButtons = document.querySelectorAll('.change'),
    headerWrapper = document.querySelector('.header__wrapper'),
    headerText = document.querySelector('.header__logo'),
    headerLabels = document.querySelectorAll('label'),
    mainWrapper = document.querySelector('.main__wrapper'),
    mainText = document.querySelector('.main__title'),
    footerWrapper = document.querySelector('.footer__wrapper'),
    footerText = document.querySelectorAll('.footer__link'),
    socImages = document.querySelectorAll('.black');

for (let i = 0; i < changeColorButtons.length; i++) {
    changeColorButtons[i].addEventListener('click', function () {
        changeColor(this.value);
    })
}

function changeColor(val) {
    switch (val) {
        case 'light':
            headerWrapper.classList.remove('backendless-header-wrapper');
            mainWrapper.classList.remove('backendless-main-wrapper');
            footerWrapper.classList.remove('backendless-footer-wrapper');

            headerWrapper.classList.remove('dark-header-wrapper');
            mainWrapper.classList.remove('dark-main-wrapper');
            footerWrapper.classList.remove('dark-footer-wrapper');

            headerText.classList.remove('dark-backendless-header-text');
            headerLabels.forEach(el => el.classList.remove('dark-backendless-header-text'));
            mainText.classList.remove('dark-backendless-main-text');
            footerText.forEach(el => el.classList.remove('dark-backendless-footer-text'));
            socImages.forEach(it => it.classList.contains('white') ? it.classList.replace('white', 'black') : null);
            break;
        case 'dark':
            headerWrapper.classList.remove('backendless-header-wrapper');
            mainWrapper.classList.remove('backendless-main-wrapper');
            footerWrapper.classList.remove('backendless-footer-wrapper');

            headerWrapper.classList.add('dark-header-wrapper');
            headerText.classList.add('dark-backendless-header-text');
            headerLabels.forEach(el => el.classList.add('dark-backendless-header-text'));
            mainWrapper.classList.add('dark-main-wrapper');
            mainText.classList.add('dark-backendless-main-text');
            footerWrapper.classList.add('dark-footer-wrapper');
            footerText.forEach(el => el.classList.add('dark-backendless-footer-text'));
            socImages.forEach(it => it.classList.contains('black') ? it.classList.replace('black', 'white') : null);
            break;
        case 'backendless':
            headerWrapper.classList.remove('dark-header-wrapper');
            mainWrapper.classList.remove('dark-main-wrapper');
            footerWrapper.classList.remove('dark-footer-wrapper');

            headerWrapper.classList.add('backendless-header-wrapper');
            headerText.classList.add('dark-backendless-header-text');
            headerLabels.forEach(el => el.classList.add('dark-backendless-header-text'));
            mainWrapper.classList.add('backendless-main-wrapper');
            mainText.classList.add('dark-backendless-main-text');
            footerWrapper.classList.add('backendless-footer-wrapper');
            footerText.forEach(el => el.classList.add('dark-backendless-footer-text'));
            socImages.forEach(it => it.classList.contains('black') ? it.classList.replace('black', 'white') : null);
            break;
        default:
            alert('light mode');
    }
}