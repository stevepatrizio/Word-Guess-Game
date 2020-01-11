
var myPsychic = [
                    "genesis",
                    "beatles", 
                    "queen", 
                    "foghat", 
                    "foreigner", 
                    "journey"
                ];

var userGuess = '';
var userWins = 0;
var userLosses = 0;
var totalGuesses = 0;
var compGuess = '';
var psychicWord = document.getElementById("psychicWord");
 
//This function selects a random array index value from var myPsychic[]
function getPsycgicWord() {
    var random = Math.floor(Math.random()*(myPsychic.length-1));
    //Maps randon index value to a specific value in the array (band)
    //Then writes value (band) to the HTML
    psychicWord.textContent = myPsychic[random];
    console.log(myPsychic[random]);
    return myPsychic[random];
}

compGuess  = getPsycgicWord();

document.onkeyup = function(event) {
    // Determines which key was pressed.
    userGuess = event.key;
    //console.log(userGuess);    
        
    for (i=0; i < compGuess.length; i++){

        if(userGuess === compGuess[i]){
            // console.log("hello");
            console.log(compGuess[i]);
        }           
    }
}

    


