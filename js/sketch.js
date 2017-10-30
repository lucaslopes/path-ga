const limiteVida = 500
const forcaMaxima = 0.25

let populacao
let ciclo = 0
let alvo

function setup() {
  createCanvas(1000, 1000)
  background(51)
  populacao = new Populacao()
  alvo = createVector(1000, 1000)
}

function draw() {
  populacao.executa()

  ciclo++
  if (ciclo == limiteVida) {
    background(51)
    populacao.avalia()
    populacao.selecao()
    ciclo = 0
  }

  stroke(255, 100)
  rect(500, 0, 1, 400)
  rect(500, 415, 1, 285)
  rect(500, 730, 1, 270)
  // rect(500, 402, 1, 300)
  // rect(500, 705, 1, 292)
  point(999, 999)
}
