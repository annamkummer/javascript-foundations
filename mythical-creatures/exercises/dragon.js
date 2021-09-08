class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.counter = 0
  }

  greet() {
    return `Hi, ${this.rider}!`
  }

  eat() {
    this.counter += 1;
    if (this.counter >= 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
