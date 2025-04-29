console.log("Desafio 1: ");
function soma(num1, num2) {
    return num1 + num2;
}
let resultado = soma(1, 2) + 5;
console.log(resultado);

let novoResultado;

function atualizarValor(valor) {
    novoResultado = valor;
    return `O  valor da variavel agora é ${novoResultado}`   
}
console.log(atualizarValor(42));

console.log("Desafio 2: ");
function novaSoma(num1, num2, num3) {
    if (num1 === undefined|| num2 === undefined || num3 === undefined) {
        return "Preencha todos os valores corretamente!";
    }else{
        return (num1 * num2 * num3) + 2;
    }
}

console.log(novaSoma(1,2)); //"Preencha todos os valores corretamente!";
console.log(novaSoma(1,2,3)); //8;

console.log("Desafio 3: ");
function processaValores(num1, num2, num3) {
    if (num1 === undefined && num2 === undefined && num3 === undefined) {
        return false;
    }
    if (num1 !== undefined && num2 === undefined && num3 === undefined) {
        return num1;
    }
    if (num1 !== undefined && num2 !== undefined && num3 === undefined) {
        return num1 + num2;
    }
    if (num1 !== undefined && num2 !== undefined && num3 !== undefined) {
        return (num1 + num2) / num3;
    }
    return null;
}
console.log(processaValores());             //false;
console.log(processaValores(1));            //1;
console.log(processaValores(1,2));          //3;
console.log(processaValores(2,2,2));        //2;
console.log(processaValores(undefined));    //false;