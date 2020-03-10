var timer = null;
var countdownNumber = 10;

function changeState(state) {
	document.body.className = 'body-state' + state;	
	clearInterval(timer);      //if 'Abort' button is pressed during countdown, we want to stop setInterval from running
	countdownNumber = 10;      //reset countdown to start at 10
	document.getElementById('countdown').innerHTML = countdownNumber;
	document.getElementById('nervous').className = 'nervous'; 
	document.getElementById('cant-wait').className = 'cant-wait';


	//countdown
	if(state == 2) {

		timer = setInterval(function() {			//The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
													//The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed
													//The ID value returned by setInterval() is used as the parameter for the clearInterval() method.
						countdownNumber = countdownNumber - 1;
						document.getElementById('countdown').innerHTML = countdownNumber;
						if(countdownNumber > 4 && countdownNumber <=7) {						//nervous dialogue
							document.getElementById('nervous').className = 'nervous show';  
						} else {
							document.getElementById('nervous').className = 'nervous'; 
						}

						if(countdownNumber > 1 && countdownNumber <= 4) {				//cant wait dialogue
							document.getElementById('cant-wait').className = 'cant-wait show';
						} else {
							document.getElementById('cant-wait').className = 'cant-wait'; 
						}

						if(countdownNumber <= 0) { 							//time to switch to lift off mode!
							changeState(3);
						}
					}, 500);	
	} else if (state==3) {				//success or failure of launch
		setTimeout(function() {
			var randomNumber = Math.round(Math.random()*10);
			console.log('random number: ' + randomNumber);
			if(randomNumber > 5) {
				changeState(4);
			} else {
				changeState(5);
			}
		}, 2000);
	}
}