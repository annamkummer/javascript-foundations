class Snack {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.itemsInStock = 0;
  }

  stockItems(items) {
    this.itemsInStock += items;
  }

  removeItem() {
    if (this.itemsInStock) {
      this.itemsInStock -= 1;
      return `Item taken! There are now ${this.itemsInStock} items left.`
    }
    return `Sorry, no ${this.name} left in stock!`
  }
}

module.exports = Snack;
