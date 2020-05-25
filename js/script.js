document.addEventListener('DOMContentLoaded', function() {
	let tabs_btns_wrapper = document.querySelector('.works-tabs-btns'),
		tabs_btn = document.querySelectorAll('.works-tabs__btn');

	for (let i = 0; i < tabs_btn.length; i++) {
		tabs_btn[i].addEventListener('click', function() {
			tabs_btn[i].classList.remove('active');
			tabs_btn[i].classList.add('active');
		})
	}

	function showTabs(a) {
		tabs_btn[a-1].classList.add('active');
	}
	showTabs(1);
});