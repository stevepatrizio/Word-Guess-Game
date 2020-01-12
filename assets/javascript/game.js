
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
var blankWords = document.getElementById("blankWords");
var vBlanks = '';
 
//This function selects a random array index value from var myPsychic[]
function getPsycgicWord() {
    var random = Math.floor(Math.random()*(myPsychic.length-1));
    //Maps random index value to a specific value in the array (band)
    //Then writes that value (band) to the HTML
    psychicWord.textContent = myPsychic[random];
    // document.getElementById("blankWords").innerHTML = pos;
    
    console.log("This is my function myPsychic value: " + myPsychic[random]);
    return myPsychic[random];
}

vBlanks = myBlanks();
compGuess  = getPsycgicWord();

function myBlanks() {
            for (var i = 0; i < compGuess.length; i++){
                
                vBlanks[i] = "_ ";
                blankWords.textContent = myPsychic[i];
                console.log(blankWords); 
                }
}

document.onkeyup = function(event) {
    // Determines which key was pressed.
    userGuess = event.key;
    //console.log(userGuess);    
        
    for (i=0; i < compGuess.length; i++){

        // vBlanks[i] = "_ ";
        // blankWords.textContent = vBlanks;
        // console.log(blankWords);

        if(userGuess === compGuess[i]){
            // console.log("hello");
            console.log(compGuess[i]);
        } 
    }
}

    


