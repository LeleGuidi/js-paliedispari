//-----------------
//    FUNZIONI
//-----------------
//Funzione che tramite un numero minimo e uno massimo, ne genere uno casuale
function rundomNumber(min, max) {
    return Math.floor(Math.random() * max ) + min;
}

//Funzione che stabilisce se un numero è pari o dispari
function evenOrOdd(number) {
    //Se il numero è pari restituisce true, altrimenti false
    if (number % 2 == 0) {
        return true;
    }
    return false;
}


//-----------------
//    MAIN
//-----------------
//Chiedo all'utente pari o dispari
let userChoice = "";
//Finchè non mi risponde correttamente lo si richiede
let checkUserChoice = false;
while (checkUserChoice == false)  {
    userChoice = prompt("Scegli: pari o dispari?")
    if (userChoice == "pari") {
        checkUserChoice = true
    } else if (userChoice == "dispari") {
        checkUserChoice = true
    }
}
//Chiedo all'utente un numero da 1 a 5
let userNumber = 0;
//Finchè non inserisce un numero da 1 a 5 lo si richiede
let checkUserNumber = false;
while (checkUserNumber == false)  {
    userNumber = prompt("Scegli un numero da 1 a 5")
    if (userNumber <= 5 && userNumber >= 1) {
        checkUserNumber = true
    }
}
console.log(userNumber);
//Chiamo la funzione per generare un numero random
let cpuNumber = rundomNumber (1, 5);
console.log(cpuNumber);
//Sommo i due numeri
let total = Number(userNumber) + Number(cpuNumber);
console.log(total);
//Chiamo la funzione per capire se è dispari o pari
let result = evenOrOdd(total);
//Se il risultato è pari come la scelta dell'utente oppure Se il risultato è dispari sempre come la scelta dell'utente, allora ha vinto.
if (result && userChoice == "pari" || result == false && userChoice == "dispari") {
    console.log("Hai vinto!!")
} else { 
//Altrimenti ha perso.
    console.log("Mi dispiace, hai perso!")  
}