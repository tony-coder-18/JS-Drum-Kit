let buttons = document.querySelectorAll("button");


for (let i = 0; i<buttons.length; i++) {
	
	
	
    buttons[i].addEventListener("click", function(){
		
		let key = this.innerHTML;
		actions(key);
		
		});
}



document.addEventListener("keydown", function(){
	
	let key = event.key;
	actions(key);
	
	});




function actions(key) {
	
	switch (key){
		case "w":
		let bassDrum = new Audio("sounds/kick-bass.mp3");
		bassDrum.play();
		break;
		case "a":
		let snare= new Audio("sounds/snare.mp3");
		snare.play();
		break;
	}
	
}

