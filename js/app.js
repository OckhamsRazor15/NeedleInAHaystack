
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
  	var guessCount = 0;
  	var secretNum = Math.floor((Math.random() * 1000) + 1);
  	// for the cheaters
  	console.log(secretNum);
  	$('#guessButton').click(function(e){
  		e.preventDefault();
		
  		var guess = $('#userGuess').val();
		
			
		if(guess > 0 && guess <= 1000){
			guessCount++;
			
			$('#guessList').append("<li class='guessesList'>" + guess + "</li>");
			
			if (guess < secretNum)
			{
				$('#feedback').text("Your guess is too LOW");
			}
			else if (guess > secretNum)
			{
				$('#feedback').text("Your guess is too HIGH");
			}
			else 
			{
				$('#feedback').text("Congratulations! You guessed the right number!");
				$('#guessButton').prop("disabled",true);
			}
			
			if(guessCount < 9){
				$('#guessesLeft').text(10-guessCount);
			}else{
				$('p').text("Last Chance!");
			}
			//TODO FIX THIS
			if (guessCount == 10 && guess != secretNum)
			{
				$('#feedback').text("The target number was " + secretNum + ". You couldn't get it. You will soon be escorted out.");
				$('#guessButton').prop("disabled",true);
			}
			
		}else{
			$('#feedback').text("Please enter a valid number");
		}
		$('#userGuess').val("").focus();
		
  	});

  	$(".new").click(newGame);

  	function newGame(){
		location.reload();
	// //start a new game
	// guessCount = 0;
	// //remove guess #
	// $('p').text(10-guessCount + " guesses left");
	// //remove list of guesses
	// $("#guessList li").remove();
	// //remove hot/cold text
	// $("#feedback").text("Make your Guess!");
	// //remove guess input #
	// $("#userGuess").val("")
  	// //secret 1-1000 number generated
  	// secretNum = Math.floor((Math.random() * 1000) + 1);
  	
  	// // for the cheaters
  	// console.log(secretNum);
}

	$(".comp").click(function(){		
		var arr = []
		for(var i=1; i <= 1000; i++ ){
			arr.push(i);
		}
		$("#compGuess, #aiButton").show();
		$("#aiButton").on("click", function(e){
			e.preventDefault();
			var aiNum = $("#compGuess").val();
			binarySearch(arr, secretNum);
		});
	});
	var binarySearch = function(array, value) {
    var guess,
        min = 1,
        max = array.length;

    for(var i=1; i <= 10; i++){
		
        guess = Math.floor((min + max) /2);
		$("#userGuess").val(guess);
			
			if(guess < value)
				min = guess + 1;
			else if (guess > value)
				max = guess - 1;
			
				
			$("#guessButton").click();
			
			if(guess == value){
				var guess,
        min = 1,
        max = array.length;
				break;
			}
			
				 
		
	 }
	
     return -1;
}


});

