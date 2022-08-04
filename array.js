let lista = [34]

//  .length é uma das propriedades do array a qual retorno o tamanho em inteiro

console.log(lista.length)

// adiciona um elemento na lista
lista.push(5,8)

console.log(lista)

// adicionar um elemento no inicio do array
lista.unshift('0')

console.log(lista)

// remove o primeiro elemento, como sempre é o primeiro elemento, não ha a necessidade
// de informar o paramentro
lista.shift()

console.log(lista)

// remove o ultimo elemento
lista.pop()

console.log(lista)