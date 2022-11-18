function submitForm(event){
    event.preventDefault();

    let tipoLavoro = document.getElementById("tipo-lavoro").value;
    let oreRichieste = document.getElementById("ore-richieste").value;
    let prezzoLavoro;

    if (tipoLavoro == 1){
        prezzoLavoro = 20.50;
    } else if (tipoLavoro == 2){
        prezzoLavoro = 15.30;
    } else if(tipoLavoro == 3){
        prezzoLavoro = 33.60;
    }

    let arrayCodiceSconto = ["YHDNU32","JANJC63","PWKCN25","SJDPO96","POCIE24"];
    let inputCodiceSconto = document.getElementById("codice-sconto").value;
    let codicePresenteInArray = false;

    for (let i = 0; i < arrayCodiceSconto.length; i++){
        if (inputCodiceSconto == arrayCodiceSconto[i]){
            codicePresenteInArray = true;
            break;
        } else {
            codicePresenteInArray = false;
        } 
    }

    if (!codicePresenteInArray){
        document.getElementById("output-1").innerHTML += "CODICE SCONTO NON VALIDO";
        document.getElementById("output-2").innerHTML += "PREZZO NON SCONTATO: " +
        prezzoTotale(prezzoLavoro,oreRichieste) + "€";
    } else {
        document.getElementById("output-1").innerHTML += "CODICE SCONTO VALIDO 25%";
        document.getElementById("output-2").innerHTML += "PREZZO SCONTATO: " + 
        prezzoSconto(arrayCodiceSconto,inputCodiceSconto,(prezzoTotale(prezzoLavoro,oreRichieste))) + "€";
    }
}


function prezzoSconto(array,codiceScontoInserito,risultato){
    for (let i = 0; i < array.length; i++){
        if (codiceScontoInserito == array[i]){
            let percentuale = risultato * 0.25;
            let sconto = risultato - percentuale;
            return sconto.toFixed(2);
        }       
    }
}

function prezzoTotale(prezzo,ore){
    let risultato = prezzo * ore;
    return risultato.toFixed(2);
}

/*
        if (inputCodiceSconto != arrayCodiceSconto[i]){
            document.getElementById("output-1").innerHTML += "CODICE SCONTO NON VALIDO";
            document.getElementById("output-2").innerHTML += "PREZZO NON SCONTATO: " +
            prezzoTotale(prezzoLavoro,oreRichieste);
            console.log(inputCodiceSconto);
        } else if (inputCodiceSconto == arrayCodiceSconto[i]){
            document.getElementById("output-1").innerHTML += "CODICE SCONTO VALIDO 25%";
            document.getElementById("output-2").innerHTML += "PREZZO SCONTATO: " + 
            prezzoSconto(arrayCodiceSconto,inputCodiceSconto,(prezzoTotale(prezzoLavoro,oreRichieste)));
            break;
        }  
*/