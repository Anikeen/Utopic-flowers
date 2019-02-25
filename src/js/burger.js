var menu_btn = document.querySelector('.menuToggle');
var nav = document.querySelector('.navigation');

menu_btn.onclick = function(){
	if (nav.className === 'navigation'){
		nav.className = 'navigation view';
	}
	else {
		nav.className = 'navigation';
	};
	
};