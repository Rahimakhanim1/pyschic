const array = ['a','b','c','d','f','g','n','m','q','w','e','r','t','y','u','p']
var arrayNumber ;
var arrayElement;
var arrayLength= array.length;
let countWins = 0;
let countLoses = 0;
let countGuesses = 9;
let countKey = 0;
const wins = document.querySelector(".wins").innerHTML = countWins;
const loses = document.querySelector(".loses").innerHTML = countLoses;
const guesses = document.querySelector(".guesses").innerHTML = countGuesses;
const yourGuesses = document.querySelector(".yourGuesses");
let letterArray = [ ];
function random(){
    arrayNumber = Math.floor(Math.random()*arrayLength);
    arrayElement = array[arrayNumber];
    console.log(arrayElement);
    return arrayElement;   
}
window.onkeyup = function keyboard(e){ 
    key = e.key.toLowerCase();
    if (e.key =="CapsLock"){
        return
    }
    if(countKey<8 & searchLetter(key)==0){
        countKey+=1;
        console.log(countKey);
                if (arrayElement != key){
                        if(searchLetter(key)==0){
                            countGuesses-=1;
                            guesses.innerHTML = countGuesses;
                            yourGuesses.innerHTML += key+" ";
                            letterArray.push(key);
                             }  }             
                    else{
                        alert("Congratulations, click for next");
                        countWins+=1;
                        wins.innerHTML = countWins;
                        letterArray = [ ];
                        arrayElement = random();
                        countGuesses = 9;
                        guesses.innerHTML = countGuesses;
                        yourGuesses.innerHTML = " ";  
                        countKey = 0
                        }
                                      }       
    else if(searchLetter(key)>0){
            alert(key +' already added');
        }                       
    else{
        alert("You lost");
        countLoses +=1;
        loses.innerHTML = countLoses;
        arrayElement = random();
        letterArray = [ ];
        countGuesses = 9;
        guesses.innerHTML = countGuesses;
        yourGuesses.innerHTML = " ";
        countKey = 0
    }
}
function searchLetter(letter){
    countLetter = 0;
    letterArray.forEach(function(arrayElement){
        if (arrayElement==letter){
            countLetter+=1;
                            }
                                });
    return countLetter;
}
random()
    

