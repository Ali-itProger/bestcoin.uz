const menuToggle = document.querySelector('#header-burger');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
}

const menuToggle1 = document.querySelector('#treg1');
const mobileNavContainer1 = document.querySelector('#sub-treg1');

menuToggle1.onclick = function(){
    menuToggle1.classList.toggle('treg-active1');
    mobileNavContainer1.classList.toggle('sub-treg-active1');
}

const menuToggle2 = document.querySelector('#treg2');
const mobileNavContainer2 = document.querySelector('#sub-treg2');

menuToggle2.onclick = function(){
    menuToggle2.classList.toggle('treg-active2');
    mobileNavContainer2.classList.toggle('sub-treg-active2');
    mobileNavContainer2.classList.toggle('active');
}


const menuToggle3 = document.querySelector('#treg3');
const mobileNavContainer3 = document.querySelector('#sub-treg3');

menuToggle3.onclick = function(){
    menuToggle3.classList.toggle('treg-active3');
    mobileNavContainer3.classList.toggle('sub-treg-active3');
    mobileNavContainer2.classList.toggle('active');
}

const menuToggle4 = document.querySelector('#treg4');
const mobileNavContainer4 = document.querySelector('#sub-treg4');

menuToggle4.onclick = function(){
    menuToggle4.classList.toggle('treg-active4');
    mobileNavContainer4.classList.toggle('sub-treg-active4');
    mobileNavContainer2.classList.toggle('active');
}