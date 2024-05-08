function somar (a: number, b: number){
    return a + b;
}

console.log(somar(5, 5))


const produto: string = "Livro"

let preco: number = 200



// Criação de um Objeto e sua Declaração e Tipagem 
const carro : {
    marca: string,
    ano: number,
    portas: number
} = {
    marca: 'Fiat',
    ano: 2020,
    portas: 4
}

interface Carro {
    nome: string;
    preco: number;
    portas: number;
}

const carros: { [key: string]: Carro } = {
    carro1: {
        nome: "Toyota Corolla",
        preco: 80000,
        portas: 4
    },
    carro2: {
        nome: "Honda Civic",
        preco: 75000,
        portas: 4
    },
    carro3: {
        nome: "Ford Mustang",
        preco: 120000,
        portas: 2
    }
};

console.log(carros);
