// Questo è il file che contiene tutto il codice JS della pagina web

// Palindroma


//Chiedere all'utente di inserire una parola
/*
let word = prompt("inserisci una parola");
let reverseWord = reverseWords(word);

if(word == reverseWord){
    console.log('Questa parola è palindroma');
    

} else {
    console.log('Questa parola non è palindroma');
}

*/


//Pari e dispari



let oddEvenChoice = prompt("Scegli pari o dispari");
let userNumberOneToFive = prompt("Scegli un numero da 1 a 5");

userNumberOneToFive = parseInt(userNumberOneToFive);

let generatedComputerRandomNumber = getRandomIntegerFromInterval(1, 5);

let sumResult = sumOfTwoNumbers(userNumberOneToFive,generatedComputerRandomNumber);

if (sumResult % 2 == 0 && oddEvenChoice == "pari") {
    console.log("Hai vinto");
} else if (sumResult % 2 == 1 && oddEvenChoice == "Dispari"){
    console.log("Hai perso");
} else {
    console.log("Hai perso");
}

























//------------------------------------FUNZIONI---------------------------------

function reverseWords(string) {

    let strReverse = string.split("").reverse().join("");
    return strReverse;
    
}




//funzione per il pari e dispari 

function getRandomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)+1);
}

function sumOfTwoNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}