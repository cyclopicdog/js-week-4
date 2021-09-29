import Product from './Product';
import Display_Product from './Display_Product';

const products = [
    new Product('mobile phone', 300, 2),
    new Product('cheese grator', 10, 20),
    new Product('hamster', 25, 8),
    new Product('chair', 12, 4),
    new Product('table', 20, 3),
    new Product('tablet', 550, 6),
    new Product('keyboard', 100, 5),
];

const container = document.querySelector('.products');

const sellMe = new Display_Product(products[1], container);
console.log(sellMe);
container.appendChild(sellMe.render());

products.forEach((element) => {
    let display = new Display_Product(element);
    container.appendChild(display.mount());
});
