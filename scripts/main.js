const header = document.querySelector('.main-header');
const home = document.querySelector('.home');

const shop = document.querySelector('.shop');
const shopBtn = document.querySelector('.shop__button');
const shopItems = document.querySelector('.shop__items');

document.addEventListener('scroll', (event) => {
	const homeSize = home.getBoundingClientRect();

	if (0 < homeSize.top) {
		header.classList.remove('main-header--bg');
	} else {
		header.classList.add('main-header--bg');
	}
});

shopBtn.addEventListener('click', () => {
	shop.classList.toggle('shop--anim-pause');
	shopItems.classList.toggle('active');
});
