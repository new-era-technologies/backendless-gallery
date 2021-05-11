'use strict';

const images = document.querySelectorAll('.image'),
        modal = document.querySelector('.modal');

images.forEach(
    it => it.addEventListener('click', function() {
        modal.classList.toggle('modal-block');
        this.classList.toggle('image-fixed');
    })
)