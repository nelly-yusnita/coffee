// ===== LOADER ===== //
onload = () =>{
	const load = document.getElementById('load');

	setTimeout(() =>{
		load.style.display = 'none'
	}, 2800)
}
// ===== end loader ===== //

// ===== SHOW MENU ===== //
const navMenu = document.getElementById('nav-menu'),
		navToggle = document.getElementById('nav-toggle'),
		navClose = document.getElementById('nav-close');

if(navToggle){
	navToggle.addEventListener('click', () =>{
		navMenu.classList.add('show-menu')
	})
}

if(navClose){
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show-menu')
	})
}
// // ===== end show menu ===== //

// // ===== REMOVE MENU MOBILE ===== //
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
	const navMenu = document.getElementById('nav-menu')

	navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
// // ===== end remove menu mobile ===== //

// // ===== SCROLL SECTIONS ACTIVE LINK ===== //
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
				sectionTop = current.offsetTop - 58,
				sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive);
// // ===== end scroll sections active link ===== //

// // ===== CHANGE BACKGROUND HEADER ===== //
function scrollHeader(){
	const header = document.getElementById('header')

	if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);
// // ===== end change background header ===== //

// // ===== PRODUCTS CAROUSEL ===== //
const blogSwiper = new Swiper('.products__container', {
	spaceBetween: 24,
	loop: true,
	grabCursor: true,

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},

	breakpoints: {
		640: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	}
});
// // ===== end blog carousel ===== //

// // ===== GALLERY ===== //
const gallerySwiper = new Swiper(".gallery__container", {
	spaceBetween: 0,
	loop: 'true',
	grabCursor: true,

	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},

	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		568: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
})
// // ===== end gallery ===== //

// ===== SCROLL UP ===== //
function scrollUp(){
	const scrollUp = document.getElementById('scroll-up');

	if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
// ===== end scroll up ===== //

// ===== AOS ANIMATE ===== //
// 1. home -> .home__content

// // 2. fitur -> .fitur__box
const fiturCard = document.querySelectorAll('.fitur__card');
fiturCard.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});

// 3. class css -> .section__title
const sectionTitle = document.querySelectorAll('.section__title');
sectionTitle.forEach((n, i) => {
	n.dataset.aos = 'fade-right';
	n.dataset.aosDelay = i * 100;
});

// 4. products -> .products__container

// 5. quality -> .quality__images, .quality__data

// 6. sponsor -> .sponsor__img
const sponsorImg = document.querySelectorAll('.sponsor__img');
sponsorImg.forEach((n, i) => {
	n.dataset.aos = 'zoom-in';
	n.dataset.aosDelay = i * 100;
});

// 7. find us -> .find__img, .find__data

// 8. blog -> .blog__card

// 9. footer -> .footer__content
const footerContent = document.querySelectorAll('.footer__content');
footerContent.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});

AOS.init({
	duration: 1500,
	once: true,  
});
// ===== end aos animate ===== //