var Material = require('./material');

class Craft {
  constructor(craft) {
    this.name = craft.type;
    this.materials = craft.materials;
    this.completed = false;
    this.totalCost = 0;
  }

  completeCraft() {
    this.completed = true;
    return 'All done! It looks great!'
  }

  calculateProjectTotal() {
    for (var i = 0; i < this.materials.length; i++) {
      var material = this.materials[i];
      var newMaterial = new Material(material.name, material.price, material.amount, material.units)
      var cost = newMaterial.calculateMaterialCost()
      this.totalCost += cost;
    }
    return this.totalCost;
  }
}

module.exports = Craft;
