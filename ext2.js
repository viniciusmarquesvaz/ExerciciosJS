/* Crie um arquivo js para informar a diferença de idade entre duas pessoas

1- Pedir o nome da pessoa mais velha
2-pedir a idade da pessoa mais velhas
3-pedir o nome da pessoa mais nova
4- pedir a idade da pessoa mais nova
5- calcular a diferença entre a idade das duas pessoas
6-exibir o nome da pessoa mais velha e a sua idade
7-exibir o nome da pessoa mais nova e a sua idade
8- exibir a difereça de idade*/

let nome_velha = prompt('informe o nome da pessoa mais velha:')
let idade_velha = prompt('informe a idade da pessoa mais velha:')
let nome_nova = prompt('informe o nome da pessoa mais nova:')
let idade_nova = prompt('informe a idade da pessoa mais nova:')
let diferenca = idade_velha - idade_nova
alert(
  'o nome da pessoa mais velha é: ' +
    nome_velha +
    ' com a idade de: ' +
    idade_velha +
    ' anos'
)
alert(
  'o nome da pessoa mais nova é: ' +
    nome_nova +
    ' com a idade de: ' +
    idade_nova +
    ' anos'
)
alert('a diferença entre as idades citadas é: ' + diferenca + ' anos')
