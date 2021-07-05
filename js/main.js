
const menu = document.querySelector('.menu-burger-btn');
const navbar = document.querySelector('.navbar');
const closeBtn = document.querySelector('.close-btn');

menu.addEventListener('click' , () => {
    navbar.classList.add('navbar-active')
});

closeBtn.addEventListener('click' , () => {
    //e.preventDefault();
    navbar.classList.remove('navbar-active')
})