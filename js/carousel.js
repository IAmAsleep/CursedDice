const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const clickedNav = document.querySelector('.carousel-nav');


const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
const navItems = Array.from(document.querySelectorAll('.nav-item'));
const CAROUSEL_SIZE = carouselItems.length;

leftBtn.addEventListener('click', swipe);
rightBtn.addEventListener('click', swipe);
clickedNav.addEventListener('click', slide);

function swipe(e) {
    const currrentCarouselItem = document.querySelector('.carousel-item.active');
    const currentIndex = carouselItems.indexOf(currrentCarouselItem);

    let nextIndex;

    if (e.currentTarget.classList.contains('left')) {
        if (currentIndex === 0) {
            nextIndex = CAROUSEL_SIZE - 1;
        }
        else {
            nextIndex = currentIndex - 1;
        }

    }
    else {
        if (currentIndex === CAROUSEL_SIZE - 1) {
            nextIndex = 0;
        }
        else {
            nextIndex = currentIndex + 1;
        }
    }


    carouselItems[nextIndex].classList.add('active');
    navItems[nextIndex].classList.add('active');
    currrentCarouselItem.classList.remove('active');
    navItems[currentIndex].classList.remove('active');
}


function slide(e) {
    if (!e.target.classList.contains('nav-item')) return;
    const clicked = Array.from(navItems).indexOf(e.target);

    if (e.currentTarget.classList.contains('active')) {
        return;
    }

    const current = Array.from(navItems).indexOf(document.querySelector('.nav-item.active'));

    carouselItems[current].classList.remove('active');
    navItems[current].classList.remove('active');
    carouselItems[clicked].classList.add('active');
    navItems[clicked].classList.add('active');
}