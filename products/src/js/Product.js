export default class Product {
    constructor(name, price, quantity) {
        (this.name = name), (this.price = price), (this.quantity = quantity);
    }

    sell() {
        this.quantity--;
    }

    store(count) {
        //don't understand the instructions for this!
        const amount = this.quantity;
        return amount;
    }
}
