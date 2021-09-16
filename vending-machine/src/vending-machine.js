class VendingMachine {
  constructor(machine) {
    this.id = machine.id;
    this.isBroken = machine.isBroken;
    this.snacks = [];
  }

  addSnacks(snack) {
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].name === snack.name) {
        return 'Sorry, that snack is already stocked! Try adding a different snack.'
      }
    }
    this.snacks.push(snack);
  }

  purchaseSnack(name, payment) {
    for (var i = 0; i < this.snacks.length; i++) {
      var item = this.snacks[i];
      if (item.name === name && item.itemsInStock > 0) {
        if (payment >= item.price) {
          item.removeItem();
          return `Success! Here is $${payment - item.price} back!`
        } else {
          return 'Sorry, not enough payment. Please add more money.'
        }
      }
    }
    return 'Sorry, no items in stock. Try another item.'
  }
}


module.exports = VendingMachine;
