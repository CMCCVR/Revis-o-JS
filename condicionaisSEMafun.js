//  criação de função SEM arrow function (=>)

let check = function(idade) {
    if (idade < 5) {
    console.log('compra o brinquedo')
} else if (idade > 5) {
    console.log('compra sorvete')
} else if (idade == 5) {
    console.log('colo da mamãe')
}
}

check(45)