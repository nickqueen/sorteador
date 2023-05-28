let numero = 0;
let tentativa = 0;

function refresh () {

    numero = Math.floor(Math.random() * 100)

    console.log(numero)

}

function verifyNumber () {

    let elemento = document.getElementById('elemento').value;

    if (elemento > 100 || elemento < 0) {

        alert('Número inválido. Tente outra vez.');
        return;
    }

    if (elemento > numero) {

        alert ('O número é MENOR. Clique para tentar outra vez.')
        tentativa++;
        //para somar o número de erros.

    } else if (elemento < numero) {

        alert ('O número é MAIOR. Clique para tentar outra vez')
        tentativa++;
        //para somar o número de erros.

    } else {

        alert ('Parabéns! Você acertou\n Número de tentativas: ' +tentativa)

    }

}

refresh ();