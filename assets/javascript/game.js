
var myPsychic = [
                    ["g","e","n","e","s","i","s"],
                    ["b","e","a","t","l","e","s"], 
                    ["q","u","e","e","n"], 
                    ["f","o","g","h","a","t"], 
                    ["f","o","r","e","i","g","n","e","r"], 
                    ["j","o","u","r","n","e","y"]
                ];

var userGuess = '';
var userWins = 0;
var userLosses = 0;
var totalGuesses = 0;
var myIndex = 0;
var myIndexOf = 0;

 

function getPsycgicWord() {
        //Computer grabs a random array index value from var myPsychic
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




