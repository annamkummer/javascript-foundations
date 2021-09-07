class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.actionCount = 0;
  }

  reversePosition(value) {
    this.standing = value
    this.layingDown = !value
  }

  getCranky() {
    this.actionCount += 1;
    if (this.actionCount > 2) {
      this.cranky = true;
    }
  }

  revive() {
    this.actionCount = 0;
    this.cranky = false
  }

  shootBow() {
    this.getCranky();
    if (this.cranky || this.layingDown) {
      return 'NO!'
    }
    return 'Twang!!!'
  }

  run() {
    this.getCranky();
    if (this.cranky || this.layingDown) {
      return 'NO!'
    }
    return  'Clop clop clop clop!!!'
    }

    sleep() {
      if (this.layingDown) {
        this.revive()
        return 'ZZZZ'
      }
      return 'NO!'
    }

    layDown() {
      this.reversePosition(false)
    }

    standUp() {
      this.reversePosition(true)
    }

    drinkPotion() {
      if (this.standing) {
        this.revive();
      }
      return 'Not while I\'m laying down!'
    }
  }

module.exports = Centaur;
