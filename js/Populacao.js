class Populacao {
  constructor() {
    this.pontos           = []
    this.tamanhoPopulacao = 500
    this.matingpool       = []

    for (let i = 0; i < this.tamanhoPopulacao; i++)
      this.pontos[i] = new Ponto()
  }

  avalia() {
    let melhorDesempenho = 0
    let campeao

    for (let i = 0; i < this.tamanhoPopulacao; i++) {
      this.pontos[i].calculaDesempenho()
      if (this.pontos[i].desempenho > melhorDesempenho) {
        melhorDesempenho = this.pontos[i].desempenho
        campeao = this.pontos[i]
      }
    }
    console.log(melhorDesempenho)
    for (let i = 0; i < this.tamanhoPopulacao; i++)
      this.pontos[i].desempenho /= melhorDesempenho

    this.matingpool = [campeao]
    for (let i = 0; i < this.tamanhoPopulacao; i++) {
      let percentual = this.pontos[i].desempenho * 100
      for (let j = 0; j < percentual; j++)
        this.matingpool.push(this.pontos[i])
    }
  }

  selecao() {
    let melhorGene = this.matingpool[0].dna
    melhorGene.mutacao()
    let novosPontos = [new Ponto(melhorGene)]

    for (let i = 1; i < this.pontos.length; i++) {
      let pai = random(this.matingpool).dna
      let mae = random(this.matingpool).dna

      let filho = pai.crossover(mae)
      filho.mutacao()
      novosPontos[i] = new Ponto(filho)
    }

    this.pontos = novosPontos;
  }

  executa() {
    for (let i = 0; i < this.tamanhoPopulacao; i++) {
      this.pontos[i].atualiza()
      this.pontos[i].exibe()
    }
  }
}
