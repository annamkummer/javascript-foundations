class Material {
  constructor(name, price, amount, units) {
    this.name = name;
    this.price  = price;
    this.amount = amount;
    this.units = units;
  }

  useMaterial(fabricUsed) {
    if (fabricUsed > this.amount) {
      return `You don\'t have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
    } else {
      this.amount -= fabricUsed;
      return `You now have ${this.amount} ${this.units} of ${this.name} left.`;
    }
  }

  calculateMaterialCost() {
    return this.price * this.amount;
  }
}

module.exports = Material;
