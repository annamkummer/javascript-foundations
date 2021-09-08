const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(person) {
    this.name = undefined;
    this.location = 'Winterfell';
    this.safe = false;

    if (person) {
      this.name = person.name;
      if (person.area) {
        this.location = person.area
      }
    }
  }

  sayHouseWords() {
    if (this.safe) {
      return 'The North Remembers'
    }
    return 'Winter is Coming';
  }

  callDirewolf(name) {
    var direwolf = new Direwolf(name, this.location);
    direwolf.starksToProtect.push(this);
    this.safe = true;
    return direwolf;
  }
}

module.exports = Stark;
