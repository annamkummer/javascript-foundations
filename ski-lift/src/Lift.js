var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true;
    this.limit = limit;
    this.skiers = [];
    this.safetyBar = 'up';
  }

  admitSkier(name, ticketStatus) {
    if (!ticketStatus) {
      return `Sorry, ${name}. You need a lift ticket!`
    }
    if (this.skiers.length < this.limit) {
      var newSkier = new Skier(name, ticketStatus);
      this.skiers.push(newSkier);
    } else {
      return `Sorry, ${name}. Please wait for the next lift!`
    }
  }

  startLift() {
    if (this.skiers.length === this.limit) {
      this.safetyBar = 'down';
    } else {
      var spotsLeft = (this.limit - this.skiers.length)
      if (spotsLeft === 1) {
        return `We still need 1 more skier!`
      }
      return `We still need ${spotsLeft} more skiers!`
    }
  }
}

module.exports = Lift;
