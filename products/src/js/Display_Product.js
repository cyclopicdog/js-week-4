export default class Display_Product {
    constructor(element, box) {
        this.element = element;
        this.box = box;
    }

    render() {
        this.box = this.elementFromHTML(`<div class="products__container">
                <h2 class="products__name">${this.element.name}
                </h2>
                <p class="products__price-line">Price:&ThickSpace; <span class="products__price">${this.element.price}</span></p>
                <p class="products__qty-line">QTY:&ThickSpace;<span class="products__qty">${this.element.quantity}</span></p>
                <button class="products__buy">Buy</button>
            </div>
            </div>`);
        return this.box;
    }
    mount() {
        this.render();
        //    this.update();
        return this.box;
    }

  update() { }
  

  buy()

    // utility:
    elementFromHTML(html, container = 'div') {
        const div = document.createElement(container);
        div.innerHTML = html;
        return div.firstChild;
    }
}
