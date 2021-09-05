class Magician {
  constructor(magician) {
    this.name = `The Great ${magician.name}`;
    this.assistant = magician.assistant;
    this.favoriteAccessory = "top hat";
    this.confidencePercentage = 10

    if (magician.clothing) {
      this.favoriteAccessory = magician.clothing
    }
  }

  performIncantation(magicWords) {
    var incantation = `${magicWords}!`
    return incantation.toUpperCase()
  }
  performTrick() {
    this.confidencePercentage += 10;
    if (this.favoriteAccessory === "top hat") {
      return "PULL RABBIT FROM TOP HAT"
    }
    return "PULL DOVE FROM SLEEVE"
  }

  performShowStopper() {
    if (this.confidencePercentage < 100 || !this.assistant) {
      return 'Oh no, this trick is not ready!'
    }
    return 'WOW! The magician totally just sawed that person in half!'
  }
}

module.exports = Magician;
