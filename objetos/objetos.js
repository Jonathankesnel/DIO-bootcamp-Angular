//Objetos
//dentro do objetos tem uma coleção de chave e valor
// classe é a definição do objeto
// instância é uma ocorrẽncia deste objeto

/*class pessoa {
    name;
    age;
    anoDeNascimento;
    
    
    constructor(name, age) {
        this.name = name
        this.age = age
        this.anoDeNascimento = 2022 - age

    }

    descrever() {
        console.log(`Meu nome é ${this.name} e minha idade
        é ${this.age}`)
    }
    

}

function compararPessoas(p1, p2) {
    if(p1.age > p2.age) {
        console.log(`${p1.name} é mais velho(a) que ${p2.name}`)

    } else if(p2.age > p1.age) {
        console.log(`${p2.name} é mais velho(a) que ${p1.name}`)

    } else {
        console.log(`${p1.name} e ${p2.name} têm a mesma idade`)

    }
}

const jonathan = new pessoa('Jonathan', 26)
const Renan = new pessoa('Renan', 24)

compararPessoas(jonathan, Renan)


//Exercitando...


class Carros {
    marca;
    cor;
    gastoMedioPorKm;
    
 

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
       
    }

     calcularViagem(distanciaEmKm, precoCombustivel) {
       
        return (distanciaEmKm * this.gastoMedioPorKm) * precoCombustivel
    }

}




const uno = new Carros('Fiat', 'Azul',1/12 )


console.log(uno.calcularViagem(70, 5 ) )

const palio = new Carros('Fiat', 'Preto', 1/10)

console.log(palio.calcularViagem(70, 5))

*/

class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(altura, peso) {
        return (altura * altura )/ peso
    }


}

const jose = new Pessoas('José', 70, 1.75)
console.log(jose.calcularImc(70, 1.75))






 

