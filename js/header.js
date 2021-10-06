const body = document.querySelector('body');
const burger = document.querySelector('.header__burger');
const header = document.querySelector('.header');
const menu  = document.querySelector('.menu');

// Секции
var welcome_section = document.querySelector('.welcome_section');
var sightseens_section = document.querySelector('.sightseens_section');

// Ссылки в nav
var main_link = document.querySelector('#main');
var sightseens_link = document.querySelector('#sightseens');
var tours_link = document.querySelector('#tours');
var contacts_link = document.querySelector('#contacts');

// Обработка нажатия на Burger menu
burger.addEventListener('click', function() {
	menu.classList.toggle('active');
	burger.classList.toggle('active');
	body.classList.toggle('lock');
	header.classList.toggle('active');
})

// Добавление background для header при скролле 
window.addEventListener('scroll', function() {

	if (window.pageYOffset > welcome_section.scrollHeight) {
		header.classList.add('scrolling');
	}
	else {
		header.classList.remove('scrolling');
	}
})

// Обработчик smooth scroll 
function scrollTo(element) {
	window.scroll({
		left: 0,
		top: ,
		behavior: 'smooth'
	})
}

main_link.addEventListener('click', () => {
	scrollTo(welcome_section);
})
sightseens_link.addEventListener('click', () => {
	scrollTo(sightseens_section);
})
