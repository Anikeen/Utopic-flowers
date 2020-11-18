const menuBtn = document.querySelector('.menu-toggle')
const nav = document.querySelector('.navigation')

menuBtn.onclick = function(){	
	if (nav.className === 'navigation'){
		nav.className = 'navigation view'
	}
	else {
		nav.className = 'navigation'
	}
}