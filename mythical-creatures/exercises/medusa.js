var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
    }

  gazeAtVictim(victim) {
    var statue = new Statue(victim.name)
    this.statues.push(statue);
    if (this.statues.length > 3) {
      var freedOne = this.statues.splice(0, 1)
      var freedPerson = new Person(freedOne[0].name)
      freedPerson.mood = 'relieved'
      return freedPerson;
    }
  }
}

module.exports = Medusa;
