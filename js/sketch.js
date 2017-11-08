const limiteVida = 550
const forcaMaxima = 0.25
const tamTela = 1000
const tamPopulacao = 1000

let populacao
let ciclo = 0
let geracoes = 1
let alvo

function setup() {
  createCanvas(tamTela, tamTela)
  background(51)
  populacao = new Populacao()
  alvo = createVector(tamTela, tamTela)
}

function draw() {
  populacao.executa()

  ciclo++
  if (ciclo == limiteVida) {
    background(51)
    populacao.avalia()
    let novosPontos = populacao.selecao()
    populacao = new Populacao(novosPontos)
    ciclo = 0
    geracoes++
  }

  // Obstáculo
  stroke(255, 50)
  strokeWeight(3)
  strokeCap(SQUARE)
  line(500,   0, 500, 400)
  line(500, 403, 500, 700)
  line(500, 706, 500, 1000)

  // Chegada
  noStroke()
  fill(0, 255, 0)
  rect(tamTela - 10, tamTela - 10, 10, 10)
}
