// tipo de dado
// booleanos

// conversao implicita
const numero = 456;
const numeroString = "456";

//console.log(numero === numeroString);   // diferente
//console.log(numero === numeroString);   // 'igual'

// Number()
// String()
//console.log(numero + numeroString); 


// conversao explicita

//console.log(numero + Number(numeroString)); 
var respostaDeTudo = 42
let idade = 29
const pi = 3.14
{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi) // 3.14 42 29

}
console.log(respostaDeTudo, idade, pi) // 3.14 29 3.14


// Variáveis declaradas com var ou let podem ser reatribuídas.
// Porém, uma variável declarada com let só pode ser usada no mesmo escopo em que está definida.
// No caso da declaração const, significa que a variável sempre terá uma referência ao mesmo objeto ou valor primitivo,
// porque essa referência não pode ser alterada. A referência em si é imutável, mas o valor mantido pela variável não se torna imutável.