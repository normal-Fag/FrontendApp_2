const body = document.querySelector('body');
const burger = document.querySelector('.header__burger');
const header = document.querySelector('.header');
const menu  = document.querySelector('.menu');

// Секции
var welcome_section = document.querySelector('.welcome_section');

// Обработка нажатия на Burger menu
burger.addEventListener('click', function() {
	menu.classList.toggle('active');
	burger.classList.toggle('active');
	body.classList.toggle('lock');
	header.classList.toggle('active');
})

// Добавление background для header при скролле 
window.addEventListener('scroll', function() {

	if (window.pageYOffset > welcome_section.scrollHeight - 86) {
		header.classList.add('scrolling');
	}
	else {
		header.classList.remove('scrolling');
	}
})

// Обработчик smooth scroll 

const menuLinks = document.querySelectorAll('.menu__link');

for (let link of menuLinks) {
	link.addEventListener('click', function(e) {

		e.preventDefault();


		const blockValue = document.querySelector('.' + link.getAttribute('href')).getBoundingClientRect().top + pageYOffset - 110;
		console.log(blockValue);

		window.scrollTo({
			top: blockValue,
			behavior: 'smooth'
		})

		menu.classList.remove('lock');
		header.classList.remove('active');
		burger.classList.remove('active');
		menu.classList.remove('active');
	})
}