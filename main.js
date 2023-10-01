const menuIcon = document.querySelector('.button-menu');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container')

menuIcon.addEventListener('click', () => {
	sidebar.classList.toggle('small_toggler');
	container.classList.toggle('container-large')
});

