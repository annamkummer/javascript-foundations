class Fairy {
  constructor(fairy) {
    this.name = fairy;
    this.dust = 10;
    this.clothes = {
      dresses: ['Iris']
    };
    this.disposition = 'Good natured';
    this.humanWards = [];
  }

  receiveBelief() {
    this.dust += 1;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(flowers) {
    for (var i = 0; i < flowers.length; i++) {
      this.clothes.dresses.push(flowers[i])
    }
  }

  becomeProvoked() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(baby) {
    if (this.disposition === 'Vengeful') {
      baby.disposition = 'Malicious'
      this.humanWards.push(baby)
    }
    if (this.humanWards.length > 2) {
      this.disposition = 'Good natured';
    }
    return baby
  }
}

module.exports = Fairy;
