
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
var myIndex = 0;
var myIndexOf = 0;

 
//This function selects a random array index value from var myPsychic[]
function getPsycgicWord() {
        var random = Math.floor(Math.random()*(myPsychic.length-1));
        //document.write(random);
        document.write(myPsychic[random]);
    }

    document.onkeyup = function(event) {

        // Determines which key was pressed.
        var userGuess = event.key;
        console.log(userGuess);
    }

    getPsycgicWord();




