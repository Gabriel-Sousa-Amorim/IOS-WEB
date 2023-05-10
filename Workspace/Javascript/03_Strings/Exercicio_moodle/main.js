var morango = "Morango"
var limao = "Limão"
var manga = "Manga"
var melancia = "Melância"
var abacaxi = " Abacaxi"

console.log(`O tamanho da palavra ${morango} é ${morango.length}`)
console.log(`O tamanho da palavra ${limao} é ${limao.length}`)
console.log(`O tamanho da palavra ${manga} é ${manga.length}`)
console.log(`O tamanho da palavra ${melancia} é ${melancia.length}`)
console.log(`O tamanho da palavra${abacaxi} é ${abacaxi.length} \n`)

console.log(`As 3 primeiras letras ${morango} é '${morango.substring(0, 3)}'`)
console.log(`As 3 primeiras letras ${limao} é '${limao.substring(0, 3)}'`)
console.log(`As 3 primeiras letras ${manga} é '${manga.substring(0, 3)}'`)
console.log(`As 3 primeiras letras ${melancia} é '${melancia.substring(0, 3)}'`)
console.log(`As 3 primeiras letras ${abacaxi} é '${abacaxi.substring(1, 4)}' \n`)

console.log(`'${abacaxi}' corrigido é ${abacaxi.trim(" ")}`)

console.log(`${abacaxi} se tornou `)
console.log(abacaxi.replace( 'Abacaxi', abacaxi.toLowerCase()))

console.log(`${morango}, ${limao}, ${manga}, ${melancia + "," + abacaxi}`)