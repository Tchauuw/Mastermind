class Couleur {
  constructor(couleur, hexa) {
    this.couleur = couleur;
    this.hexa = hexa;
  }
  getCouleur() {
    return this.couleur;
  }
  setCouleur(couleur) {
    return (this.couleur = couleur);
  }
  getHexa() {
    return this.name;
  }
  setName(hexa) {
    return (this.hexa = hexa);
  }
}
