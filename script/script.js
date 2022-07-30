const main = document.querySelector('.main');

window.addEventListener('DOMContentLoaded', function () {
	if (window.innerWidth <= 820) {
		main.classList.add('mobile');
	} else {
		main.classList.remove('mobile');
	}
});
window.addEventListener('resize', function () {
	if (window.innerWidth <= 820) {
		main.classList.add('mobile');
	} else {
		main.classList.remove('mobile');
	}
});