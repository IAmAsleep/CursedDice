'use strict';

const root = document.documentElement;
const buttons = Array.from(document.querySelectorAll('.accordion-label'));

buttons.forEach(button => { button.addEventListener('click', buttonClick) });

function buttonClick(e) {
    const btn = e.currentTarget;
    btn.classList.toggle('open');
    btn.nextElementSibling.classList.toggle('open');
    root.style.setProperty('--content-height', btn.nextElementSibling.scrollHeight + 'px');
    buttons.forEach(button => {
        if (button !== btn && button.classList.contains('open')) {
            button.classList.remove('open');
            button.nextElementSibling.classList.remove('open');
        }
    })
}