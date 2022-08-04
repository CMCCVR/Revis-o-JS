let estados = ['Ceará', 'Goiás', 'CABO', 'Maranhao'];

// o objeto estados é uma Array, desta forma ele possui um atributo
// chamado length (tamanho), desta forma ele passa para a função forEach,
// que sabe que ele vai passsar por cada
// elemento ate o ultimo, acessado atrave da propriedade length.
estados.forEach((estado, indice) => console.log(indice, estado))
