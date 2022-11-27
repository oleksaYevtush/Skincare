"use strict"

const reviewsSwiper = document.querySelector('.swiper-reviews');

if (reviewsSwiper) {
	const swiper = new Swiper('.swiper-reviews', {
		// Optional parameters
		autoHeight: true,
		loop: true,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
	});
}

$(document).ready(function() {
	
});

document.addEventListener('DOMContentLoaded', () => {
	const hero = document.querySelector('.hero');
	const header = document.querySelector('.header');
	const scrollItems = document.querySelectorAll('.scroll-item');

	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight / 2) + window.scrollY;
		// console.log(windowCenter)
		scrollItems.forEach(el => {
			let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
			console.log(scrollOffset)
			if (windowCenter >= scrollOffset) {
				el.classList.add('animation-class');
			} else {
				el.classList.remove('animation-class');
			}
		});
	};

	const headerFixed = () => {
		let scrollTop = window.scrollY;
		let heroCenter = hero.offsetHeight / 2;

		if (scrollTop >= heroCenter) {
			header.classList.add('fixed')
			hero.style.marginTop = `${header.offsetHeight}px`;
		} else {
			header.classList.remove('fixed')
			hero.style.marginTop = `0px`;
		}
	};

	headerFixed();
	scrollAnimation();
	window.addEventListener('scroll', () => {
		headerFixed();
		scrollAnimation();
	});
});