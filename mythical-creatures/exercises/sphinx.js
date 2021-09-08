class Sphinx {
  constructor() {
    this.name = null;
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    if (this.riddles.length > 2) {
      this.riddles.splice(0, 1)
    }
    this.riddles.push(riddle);
  }

  attemptAnswer(answer) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (answer === this.riddles[i].answer) {
        this.riddles.splice(i, 1);
        if (this.riddles.length > 0) {
          return 'That wasn\'t that hard, I bet you don\'t get the next one'
        }
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${answer}\"???`
      }
    }
    this.heroesEaten += 1;
  }
}

module.exports = Sphinx;
