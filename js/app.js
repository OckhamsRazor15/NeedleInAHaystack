
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	//variables
  	//why do i have to put 1 instead of 0?
  	var guessCount = 1;
  	var secretNum = Math.floor((Math.random() * 100) + 1);
  	// for the cheaters
  	console.log(secretNum);
  	$('#guessButton').click(function(e){
  		e.preventDefault();
  		var guesses = $('#userGuess').val();

  		if(guesses >= 1 && guesses <= 100){
  			$('#count').text(guessCount++);
  			$('#guessList').append("<li class='guessesList'>" + guesses + "</li>");
  		}else{
  			//enter text that they need to put an accepted
  			alert("Please enter a valid number (1-100)");	
  		}
		//user needs feedback on guess
		//feedback appears in #feedback
		if (guesses > secretNum){
			if((guesses - secretNum) >= 20 ){
	  			$('#feedback').text("Wow! You're freezing");
	  		}else if ((guesses - secretNum) <= 20 && (secretNum - guesses) !== 0){
	  			$('#feedback').text('Hot!');
	  		}else if ((guesses - secretNum) == 0){
	  			$("#feedback").text("Wow. You got it!");
	  			if(confirm("Great Job! Play again?") == true){
	  				newGame();
	  			}else{
	  				$("#feedback").text("Click + New Game to start over");
	  			}
	  		}
		}
			else{
			if((secretNum - guesses) >= 20 ){
  				$('#feedback').text("Wow! You're freezing");
  			}else if ((secretNum - guesses) <= 20 && (secretNum - guesses) !== 0){
  				$('#feedback').text('Hot!');
  			}else if ((secretNum - guesses) == 0){
  				$("#feedback").text("Wow. You got it!");
  				if(confirm("Great Job! Play again?") == true){
  				newGame();
  				}else{
  				$("#feedback").text("Click + New Game to start over");
  				}
  			}}
  		
  	});

  	$(".new").click(newGame);

  	function newGame(){
	//start a new game
	//remove guess #
	$("#count").text("0");
	//remove list of guesses
	$("#guessList li").remove();
	//remove hot/cold text
	$("#feedback").text("Make your Guess!");
	//remove guess input #
	$("#userGuess").val("")
  	//secret 1-100 number generated
  	secretNum = Math.floor((Math.random() * 100) + 1);
  	guessCount = 1;
  	// for the cheaters
  	console.log(secretNum);
}




});

