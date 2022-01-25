    // genero numero random per me 
    alert("Clicca ok per tirare il dado")
    
    
    myRandom = Math.floor(Math.random() * 6) + 1;
    
    console.log(myRandom);
    
    alert("Il tuo numero è " + myRandom);
    
    // genero numero random per il computer 
    
    alert("Clicca ok per far tirare il dado al Banco");
    
    pcRandom = Math.floor(Math.random() * 6) + 1;
    
    alert("Il numero del Banco è " + pcRandom);

    // Mostro risultato

    if(myRandom > pcRandom){
        alert("Congratulazioni! Hai battuto il Banco");
    } else if (myRandom == pcRandom){
        alert("Pareggio!");
    } else {
        alert("Spiacente, hai perso!");
    }
    
    

