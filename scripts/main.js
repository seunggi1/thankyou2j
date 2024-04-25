const header = document.querySelector('.main-header');
const home = document.querySelector('.home');

document.addEventListener('scroll', (event) => {
	const homeSize = home.getBoundingClientRect();

	if (0 < homeSize.top) {
		header.classList.remove('main-header--bg');
	} else {
		header.classList.add('main-header--bg');
	}
});
