
var myPsychic = [
                    ["g","e","n","e","s","i","s"],
                    ["b","e","a","t","l","e","s"], 
                    ["q","u","e","e","n"], 
                    ["f","o","g","h","a","t"], 
                    ["f","o","r","e","i","g","n","e","r"], 
                    ["j","o","u","r","n","e","y"]
                ];

var userGuess;
var userWins = 0;
var userLosses = 0;
var totalGuesses = 0;
var myIndex = 0;
var myIndexOf = 0;

// Computer grabs a random array index value from var myPsychic
var random = Math.floor(Math.random()*(myPsychic.length-1)); 

function getPsycgicWord() {
    // document.querySelector("#myPsychic").innerHTML = "myPsychic: " + psychicWord;
       document.write(random);
    }
    
// Function runs when user selects a letter 
// document.onkeyup = function(event) {
//     //Determine which key was selected by user
//       var userGuess = event.key;  

// }

//     userGuess.textContent = userGuess;


