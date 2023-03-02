function soma(numero1, numero2) {
    return numero1 + numero2;
}

// console.log(soma(2, 2));
// console.log(soma(245, 20));
// console.log(soma(-500, 3));

// parâmetros vs argumentos

function nomeIdade(nome, idade) {
    return `O meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade("Luís", 28));
// console.log(nomeIdade(28, "Luís")); // ordem errada

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

resultado = multiplica(soma(4,5),soma(3,3));

//console.log(resultado);

resultado = multiplica(soma(4,5));

//console.log(resultado);

function comParametro(param) {
    console.log(param)
}
comParametro()