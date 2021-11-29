window.onload = function() {

	// Обработка нажатия на Burger menu
	const body = document.querySelector('body');
	const header = document.querySelector('.header');
	const headerMenuList  = document.querySelector('.menu');
	const headerBuregerButton = document.querySelector('.header__burger');
	headerBuregerButton.addEventListener(
		'click', 
		(event) => burgerOpenCloseMenu(header, headerMenuList, body, event)
	)
	
	// Добавление background для header при скролле 
	const welcome_section = document.querySelector('.welcome-section');
	window.addEventListener(
		'scroll', 
		() => throttle(
			addBlackBackgroundOnHeader(welcome_section, header), 
			10000)
		);
	
	// Обработчик smooth scroll 
	const menuLinks = document.querySelectorAll('.menu__link, .bottom-menu__link');
	for (let link of menuLinks) {
		link.addEventListener(
			'click', 
			(event) => linksOnClick(body, header, headerBuregerButton, headerMenuList, event)
		)
	}
	
	// Кнопка "Больше туров"
	const buttonToggleItems = document.getElementsByClassName('tours__more-btn');
	const listItemsContainer = document.getElementsByClassName('tours__list');
	buttonToggleItems[0].addEventListener(
		'click', 
		(event) => handleShowItemsButtonClick(listItemsContainer[0], event)
	)

	// Добавление подчеркивания на ссылки в Header
	window.addEventListener(
		'scroll', 
		(event) => throttle(underlineLinks(event), 20000)
	)
}
//=============================================================================================

// Функция для кнопки "Больше туров"
function handleShowItemsButtonClick(listItemsContainer, pointerEvent) {
	const classForVisibleHiddenItems = 'tours__list--all-hidden-visible'

	if(pointerEvent.currentTarget.innerText === 'Больше туров') {
		pointerEvent.currentTarget.innerText = 'Скрыть'
		listItemsContainer.classList.add(classForVisibleHiddenItems)
	}
	else {
		pointerEvent.currentTarget.innerText = 'Больше туров'
		listItemsContainer.classList.remove(classForVisibleHiddenItems)
	}
}

// функция для кнопки "Бургер"
function burgerOpenCloseMenu(Header, Menu, Body, pointerEvent) {
	pointerEvent.currentTarget.classList.toggle('active');
	Header.classList.toggle('active');
	Menu.classList.toggle('active');
	Body.classList.toggle('lock');
}

// функция для Добавления bg в Header
function addBlackBackgroundOnHeader(section, header) {
	if (window.pageYOffset > section.scrollHeight - 100) {
			header.classList.add('scrolling');
	}
	else {
		header.classList.remove('scrolling');
	}
} 

// функция троттлинга 
const throttle = (fn, throttleTime) => {
    let isThrottled = false;
    let isFirstCall = true;
  
    return function() {
        if (isFirstCall) {
            isFirstCall = false;
            return fn.apply(this, arguments);
        }
    
        if (isThrottled) return;
    
        isThrottled = true;
    
        setTimeout(() => {
            fn.apply(this, arguments);
            isThrottled = false;
        }, throttleTime)
    }
}

// функция для добавления EventListener на ссылки в меню 
function linksOnClick(body, header, headerBurgerBtn, headerMenuList, pointerEvent) {
	event.preventDefault();

	const blockValue = document.querySelector('.' + pointerEvent.currentTarget.getAttribute('href')).getBoundingClientRect().top + pageYOffset - 110;

	window.scrollTo({
		top: blockValue ,
		behavior: 'smooth'
	});
	body.classList.remove('lock');
	header.classList.remove('active');
	headerBurgerBtn.classList.remove('active');
	headerMenuList.classList.remove('active');
}


function underlineLinks(pointerEvent) {
	let navLinks = document.querySelectorAll('.menu__link');
	let scrollY = window.scrollY;

	for(let link of navLinks){

		let section = document.querySelector('.'+ link.getAttribute('href'));

		if(section.offsetTop - 80 <= scrollY && 
			section.offsetTop + section.offsetHeight - 80 > scrollY) {
			link.classList.add('menu__link--current-section');
		}
		else{
			link.classList.remove('menu__link--current-section');
		}
	}
}

