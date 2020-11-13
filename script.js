const menuHamberger = document.querySelector('.menu_hamburger input');
const nav = document.querySelector('nav ul');

menuHamberger.addEventListener('click', function(){
	nav.classList.toggle('slide');
});