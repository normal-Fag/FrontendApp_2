const body = document.querySelector('body');
const burger = document.querySelector('.header__burger');
const header = document.querySelector('.header');
const menu  = document.querySelector('.menu');

// Секции
const welcome_section = document.querySelector('.welcome-section');

// Обработка нажатия на Burger menu
burger.addEventListener('click', function() {
	menu.classList.toggle('active');
	burger.classList.toggle('active');
	body.classList.toggle('lock');
	header.classList.toggle('active');
})

// Добавление background для header при скролле 
window.addEventListener('scroll', function() {

	if (window.pageYOffset > welcome_section.scrollHeight - 100) {
		header.classList.add('scrolling');
	}
	else {
		header.classList.remove('scrolling');
	}
})

// Обработчик smooth scroll 

const menuLinks = document.querySelectorAll('.menu__link, .bottom-menu__link');

for (let link of menuLinks) {
	link.addEventListener('click', function(e) {

		e.preventDefault();


		const blockValue = document.querySelector('.' + link.getAttribute('href')).getBoundingClientRect().top + pageYOffset - 110;
		console.log(blockValue);

		window.scrollTo({
			top: blockValue ,
			behavior: 'smooth'
		})

		body.classList.remove('lock');
		header.classList.remove('active');
		burger.classList.remove('active');
		menu.classList.remove('active');
	})
}

// Унопка "Больше туров"

const moreToursBtn = document.querySelector('.tours__more');
const noneTours = document.querySelectorAll('.tours__item__hidden');

moreToursBtn.addEventListener('click', () => {
	// let noneTours = document.querySelectorAll('.tours__item[id]');

	noneTours.forEach(element => element.classList.toggle('tours__item__hidden'));

	 if(moreToursBtn.querySelector('button').innerText.toLowerCase() === 'less') {
    	moreToursBtn.querySelector('button').innerText = 'Больше  туров';
	}
	  else {
	    moreToursBtn.querySelector('button').innerText = 'Less';
	}
})







