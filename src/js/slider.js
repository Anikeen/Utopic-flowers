var buttons = document.querySelectorAll('.sliderSelector');
var slides = document.querySelectorAll('.imageHolder');
var count = 0;
var prev_element = 0;


for(var i = 0; i < buttons.length; i++){
	buttons[i].onclick = view;
};

function view(){	
	var button_id = this.getAttribute('id');	
	for(var i = 0; i < buttons.length; i++){
		if(buttons[i].getAttribute('id') === button_id){
			count = i;
			if(count > prev_element){
				for(var i = 0; i < count;){
				slides[i].className = 'imageHolder viewedLeft';
				buttons[i].className = 'sliderSelector';
				i++;			
				slides[i].className = 'imageHolder showed';
				};
			}
			else if(count < prev_element){
				for(var i = buttons.length - 1; i > count;){
					slides[i].className = 'imageHolder viewedRight'; 
					buttons[i].className = 'sliderSelector'; 
					i--;
					slides[i].className = 'imageHolder showed';				
				};
			}
			buttons[count].className = 'sliderSelector whited';
			break;			
		};
	};
	prev_element = count;
};