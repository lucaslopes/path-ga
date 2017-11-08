class Ponto {
  constructor(dna) {
    this.posicao    = createVector(0, 0)
    this.velocidade = createVector()
    this.aceleracao = createVector()

    this.desempenho = 0
    this.chegou     = false
    this.bateu      = false
    this.melhor     = false
    this.cicloFim   = limiteVida

    if (dna) this.dna = dna
    else this.dna = new DNA()
  }

  atualiza() {
    let distancia = this.posicao.dist(alvo)
    if (distancia < 5) this.chegou = true

    if (this.chegou && this.cicloFim == limiteVida) {
      this.cicloFim = ciclo
      console.log('FIM')
    }

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
    if (
      this.posicao.x > width  ||
      this.posicao.x < 0      ||
      this.posicao.y > height ||
      this.posicao.y < 0
    ) this.bateu = true

    if (
      (this.posicao.x > 498 && this.posicao.x < 503)
      &&
      (this.posicao.y < 400 ||
      (this.posicao.y > 403 && this.posicao.y < 700) ||
       this.posicao.y > 706)
    ) this.bateu = true
  }

  aplicaForca(forca) {
    this.aceleracao.add(forca);
  }

  exibe() {
    push()
      if (this.melhor) stroke(0, 255, 255)
      else stroke(255, 0, 255, 50)
      strokeWeight(2)
      translate(this.posicao.x, this.posicao.y);
      point(0, 0)
    pop()
  }

  calculaDesempenho() {
    let distancia = this.posicao.dist(alvo)
    this.desempenho = (1 / distancia) * 100

    if (this.bateu)
      this.desempenho /= 2
    if (this.posicao.x > 503)
      this.desempenho *= 10
    if (this.chegou)
      this.desempenho *= map(this.cicloFim, 0, limiteVida, 100, 10)
  }
}
