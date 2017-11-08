class DNA {
  constructor(genes) {
    if (genes)
      this.genes = genes
    else {
      this.genes = []

      for (let i = 0; i < limiteVida; i++) {
        this.genes[i] = p5.Vector.random2D()
        this.genes[i].setMag(forcaMaxima)
      }
    }
  }
  
  crossover(parceiro) {
    let novosGenes = [];
    let corte = floor(random(this.genes.length))

    for (let i = 0; i < this.genes.length; i++)
      i > corte ?
        novosGenes[i] = this.genes[i] :
        novosGenes[i] = parceiro.genes[i]

    return new DNA(novosGenes);
  }

  mutacao() {
    for (let i = 0; i < this.genes.length; i++) {
      if (random(1) < 0.05) {
        this.genes[i] = p5.Vector.random2D();
        this.genes[i].setMag(forcaMaxima);
      }
    }
  }
}
