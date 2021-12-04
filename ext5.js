let nomeNave = prompt('Informe abaixo o nome da sua nave:')
let cont = null
let answer = prompt(
  'Deseja entrar em dorbra espacial?\nescreva o número correspondente a resposta\n1-SIM\n2-NAO'
)
let entry = null
if (answer == 1) {
  entry = 1
  alert(`a sua nave possui a quantidade de ${entry} dobra `)
} else if (answer == 2) {
  alert(`a sua contagem foi encerrada no total de ${entry} dobras`)
} else {
  alert(
    'a reposta de contagem foi diferente de sim(1) e não(2), por favor, retorner ao início'
  )
}
while (answer == 1) {
  let continueConfirmation = confirm(
    'gostaria de realizar a próxima dobra?\n 1-sim\n2-nao'
  )
  if (continueConfirmation == 1) {
    entry = cont + 1
  } else if (continueConfirmation == 2) {
    alert(`a sua contagem foi encerrado no total de ${entry}`)
  } else {
    alert(
      'a reposta de contagem foi diferente de sim(1) e não(2), por favor, retorner ao início'
    )
  }
}
