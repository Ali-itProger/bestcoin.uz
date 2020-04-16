const menuToggle = document.querySelector('#header-burger');
const mobileNavContainer = document.querySelector('#mobile-nav');
const mobileBody = document.querySelector('body');

menuToggle.onclick = function(){    
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
    mobileBody.classList.toggle('look');
}