let buttons = document.querySelectorAll("button");


for (let i = 0; i<buttons.length; i++) {
	
    buttons[i].addEventListener("click", function(){
		
		let key = this.innerHTML;
		actions(key);
		
		buttonPressed(key);

		});

}



document.addEventListener("keydown", function(){
	
	let key = event.key;
	actions(key);

	buttonPressed(key);
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
		case "s":
		let tom1= new Audio("sounds/tom-1.mp3");
		tom1.play();
		break;
		case "d":
		let tom2= new Audio("sounds/tom-2.mp3");
		tom2.play();
		break;
		case "j":
		let tom3= new Audio("sounds/tom-3.mp3");
		tom3.play();
		break;
		case "k":
		let tom4= new Audio("sounds/tom-4.mp3");
		tom4.play();
		break;
		case "l":
		let crash= new Audio("sounds/crash.mp3");
		crash.play();
		break;
		default:
			console.log(key);
	}
	
}

//Animation Function

function buttonPressed(btn) {
	let buttonName = document.querySelector("."+btn);

	buttonName.classList.add('pressed');

	setTimeout(function(){
		buttonName.classList.remove('pressed');
	}, 200)

}
