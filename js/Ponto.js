class Ponto {
  constructor(dna) {
    this.posicao    = createVector(0, 0)
    this.velocidade = createVector()
    this.aceleracao = createVector()

    this.desempenho = 0
    this.chegou     = false
    this.bateu      = false

    if (dna) this.dna = dna
    else this.dna = new DNA()
  }

  aplicaForca(forca) {
    this.aceleracao.add(forca);
  }

  calculaDesempenho() {
    let distancia = this.posicao.dist(alvo)
    this.desempenho = (1 / distancia) * 100

    if (this.chegou) this.desempenho *= 100
    if (this.bateu)  this.desempenho /= 10

    if (this.posicao.x > 500) this.desempenho *= 100
  }

  atualiza() {
    let distancia = this.posicao.dist(alvo)
    if (distancia == 1) this.chegou = true

    this.checaBateu()
    this.aplicaForca(this.dna.genes[ciclo])

    if (!this.chegou && !this.bateu) {
      this.velocidade.add(this.aceleracao)
      this.posicao.add(this.velocidade)

      this.aceleracao.mult(0)
      this.velocidade.limit(4)
    }
  }

  checaBateu() {
    if
    (
      (this.posicao.x > 497 && this.posicao.x < 503)
      &&
      (this.posicao.y < 400 ||
      (this.posicao.y > 415 && this.posicao.y < 700) ||
       this.posicao.y > 730)
      ||
      this.posicao.x > width  ||
      this.posicao.x < 0      ||
      this.posicao.y > height ||
      this.posicao.y < 0
    )
    this.bateu = true
  }

  exibe() {
    push()
      stroke(255, 0, 255, 100)
      translate(this.posicao.x, this.posicao.y);
      point(0, 0)
    pop()
  }
}
