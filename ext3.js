//Simulação de ums sistema de navegação de  uma nave interagindo com o user.
//o sistema deve fazer o seguinte

//1 -  perguntar o nome do piloto
//2 -  colocar a velocidade inicial da nave como 0
//3 -  perguntar a que velocidade ele gostaria de acelerar a nave
//4 -  pedir a confirmação infomando que está indo para a velocidade X km/s

let pilotName = prompt('qual o seu nome caro piloto')
let velocidadeInicial = 0
let velocidadeDesejada = prompt(
  'Qual velocidade você gostaria de de acelerar a nave?'
)
let confirmationDados = confirm(
  `Você confirma que a nave está indo na velocidade ${velocidadeDesejada} kilômetros por hora?`
)

//condicional
if (velocidadeDesejada <= 0) {
  alert('a sua nave está parada. considere partir a aumentar a velocidade.')
} else if (velocidadeDesejada <= 40) {
  alert('Você está devagar, podemos aumentar mais')
} else if (velocidadeDesejada >= 80 && velocidadeDesejada <= 100) {
  alert('velocidade alta.Considere diminuir')
} else if (velocidadeDesejada >= 100) {
  alert('Controle automático forçado')
}
