// Creo il mio array per avere una lista di email valide 


const mailList = ["user1", "user2", "user3", "user4", "user5"];

// vado a creare una variabile che contenga il valore del mio prompt 

const mailUser = prompt("Inserisci il tuo inidirizzo email");

// Definisco una variabile che contenga l'evento di login avvenuto con successo e la inizializzo a falso di default


let loginSuccess = false;


// Creo il ciclo for così che il sistema scorra tutti i valori dell'array e per farglieli verificare,


for (let i = 0; i < mailList.length; i++){

    console.log(i , mailList[i])

    // Per ogni ripetizione del ciclo verifica se il valore iesimo dell'array preso in esame è uguale o meno a al mio prompt 

    if (mailList[i] == mailUser){

        // se l'ugualianza si verifica allora la variabile loginSuccess sarà vera. 
    
     loginSuccess = true;

    } 
    
}



// Ogni qualvolta la variabile loginSuccess è vera (quindi riusciamo a fare il login), allora apparirà il messaggio di benvenuto 

if (loginSuccess == true){
    alert("benvenuto")
} else{

    // In caso contrario (ovvero il loginSuccess sarà false ) apparirà un messaggio d'errore
    alert("Inserisci un indirizzo email valido")
}





//-----------------------------------------------------------------------------------//


                                    // Fine //



//     else if(mailList[i] != mailUser){
//         mailList.pop(mailList[i] < mailList.length);
        
//         console.log(mailList);
//         // alert("sbagliato");
//     }
    

// }

// for (let i = 0; i < mailList.length; i++){


//     if (mailList[i] == mailUser){

//        alert("Benvenuto " + mailUser);
//     }
    

    
    
//     // if( mailUser == mailList[i]) {
//     //     console.log("Giusto")
//     // }
// }







    
    // if (mailList.includes(mailUser)){
    //     alert("Benvenuto " + mailUser);
        
    // } else  {
    //     alert("Inserisci un indirizzo email valido");
    //     window.location.reload()
    // }
    












// Caso in cui provo a farlo con un nuovo prompt invece che un nuovo alert 


// for ( let i = 0; i < mailList.length; i++){

//     let mailListItem = (mailList[i]);
    
//     if (mailUser == mailListItem){
//         alert("Benvenuto " + mailUser);
        
//     } else {
//         let mailUser = prompt("Inserisci un inidirizzo email valido");
//     }
    
// }




// const mailListItem = mailList[i];

// if (mailUser == mailListItem){

// console.log(mailList[i]);

    
// }

