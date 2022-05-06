//--------------
//   FUNZIONI
//--------------
function palindroma(string) {
    //Creo una variabile booleana per ottenere un risultato finale
    let check = true;
    //Creo una variabile per copiare, al contrario, la stringa inserita dall'utente
    let reverseCopy = "";
    //Creo un ciclo che permetta di partire dall'ultima lettera della stringa inserita dall'utente e a ritroso la copia sulla variabile creata in precedenza.
    for (let i = (string.length -1); i >= 0; i--) {
        reverseCopy += string[i];
    }
    if (reverseCopy != string) {
        check = false;
    }
    //Un console.log per vedere se funziona
    console.log(reverseCopy)
    //Un return per ottenere dalla funzione il risultato vero o falso
    return check;
}

//--------------
//   MAIN
//--------------
// Chiedo all'utente la parola
const word = prompt("Inserisci la parola");
//Richiamo la funzione
const result = palindroma(word);
//Se il risultato della funzione è vero allora la parola è palindroma
//Altrimenti non lo è
if (result) {
    console.log("La parola inserita è palindroma")
} else {
    console.log("La parola inserita non è palindroma")
}