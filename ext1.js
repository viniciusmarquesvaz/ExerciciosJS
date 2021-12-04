/*                    Exercicio 1
1- informe uma mensagem de boas vindas ao usuário
2- peça para o usuário informar o nome dele 
3- peça o usuário para informar a idade
4- peça a confirmação da idade para o usuário 
5- informe um alerta com todos os dados que o usuário informou (nome,idade,confirmação)*/

alert('Bem-vindo! A seguir pediremos que informe alguns dados.')
let nome = prompt('escreva o seu nome abaixo:')
let idade = prompt('informe a sua idade abaixo:')
let confirmacao = confirm('a sua idade é ' + idade + '?')
alert(
  `o nome do usuário é ${nome}, e a idade dele é ${idade}, e a confirmação dele é ${confirmacao}`
)
