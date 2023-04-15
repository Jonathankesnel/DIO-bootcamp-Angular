// Exercitando arrays
//Crie um programa que dado um número calcule sua tabuada.
const number = 7
const tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    function calcularTabuada() {

        
        for(i = 0; i <= 10; i++) {
            console.log(`${tabuada[i]} * ${number} = ${tabuada[i]  * number}`)
        }
    }

    console.log(calcularTabuada()) 

    // Crie um programa que percorra uma lista de números e retorne todos os pares encontrados

    const numeros = [ 0, 1, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 21, 22, 24]

    function pares() {
        numeros.forEach(numeros => {
            if(numeros % 2 === 0){
                console.log(numeros)
            }
        });
    }

    console.log(pares())