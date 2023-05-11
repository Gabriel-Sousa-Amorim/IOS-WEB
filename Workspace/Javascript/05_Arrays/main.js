//Coparação

//Igual:
console.log('1 == 1?')
console.log(1 == 1);
//Retorna true

//Diferente:
console.log('1 != 2?')
console.log(1 != 2);
//Retorna true

//Menor que:
console.log('1 < 1.01?') 
console.log(1 < 1.01);
//Retorna true

//Menor ou Igual à:
console.log('1 <= 1 && 1 <= 1.01?') 
console.log(1 <= 1 && 1 <= 1.01);
//Retorna true

//Maior que
console.log("1 > 0.99?") 
console.log(1 > 0.99);
//Retorna true

//Maior ou igual à
console.log("1 >= 1 && 1 >= 0.99?") 
console.log(1 >= 1 && 1 >= 0.99);
//Retorna true

//Triplo Igual
//Retorna true apenas se o tipo, valor.
console.log("1 === 1?")
console.log(`${1 === 1}`);
//Retorna true

//&&=   And Retorna true apenas se todos os valores batem.
//||=   Or Retorna true se algum dos valores bate.
//! =   Not inverte o valor lógico, true -> false.

//For
console.log('\nFor i <= 10');
for(var i = 1 ;i <= 10; i++) {
    console.log('i é igual', i);
};

//While
i = 0;
console.log('\nWhile i <= 10');
while (i <= 10) {
    console.log('i é igual', i);
    i++;
}

//Do While
do {
    console.warn('looping is running')
} while (i <= 20) {
    console.log('i é igual', i);
    i++;
}
