class Populacao {
  constructor(pontos) {
    this.tamanhoPopulacao = tamPopulacao
    this.matingpool       = []

    if (pontos)
      this.pontos = pontos
    else {
      this.pontos = []
      for (let i = 0; i < this.tamanhoPopulacao; i++)
        this.pontos[i] = new Ponto()
    }
  }

  executa() {
    for (let i = 0; i < this.tamanhoPopulacao; i++) {
      this.pontos[i].atualiza()
      this.pontos[i].exibe()
    }
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

    console.log('Geração: ' + geracoes + ' / Melhor: ' + melhorDesempenho)
    for (let i = 0; i < this.tamanhoPopulacao; i++)
      this.pontos[i].desempenho /= melhorDesempenho

    this.matingpool.push(campeao)
    for (let i = 0; i < this.tamanhoPopulacao; i++) {
      let percentual = floor(this.pontos[i].desempenho * 10)
      for (let j = 0; j < percentual; j++)
        this.matingpool.push(this.pontos[i])
    }
  }

  selecao() {
    let melhorGene = this.matingpool[0].dna
    let novosPontos = [new Ponto(melhorGene)]

    for (let i = 1; i < this.pontos.length; i++) {
      let pai = random(this.matingpool).dna
      let mae = random(this.matingpool).dna

      let filho = pai.crossover(mae)
      filho.mutacao()
      novosPontos[i] = new Ponto(filho)
    }

    novosPontos[0].melhor = true
    return novosPontos;
  }
}
