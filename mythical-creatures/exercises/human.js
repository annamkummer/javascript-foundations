class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = false;
  }

  noticesOgre() {
    if (this.encounterCounter === 0) {
      return false
    }
    return this.encounterCounter % 3 === 0
}
//
// //   // X ? T : F
//   (this.encounterCounter === 0)? (false) : (this.encounterCounter % 3 === 0)
}

module.exports = Human;
