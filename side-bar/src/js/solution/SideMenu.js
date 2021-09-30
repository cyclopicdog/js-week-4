export default class Sidemenu {
    constructor() {
        this.is_open = true;
    }

    render() {
        this.element = this.elementFromHTML(`
            <nav class="side-menu">
                <img class="side-menu__icon" src="/img/menu.svg" alt="">
                <div class="side-menu__content">
                    <h2 class="side-menu__headline">Menu</h2>
                    <div class="side-menu__links">
                        <a class="side-menu__link" href="#">Lorem ipsum</a>
                        <a class="side-menu__link" href="#">Dolor sit amet</a>
                        <a class="side-menu__link" href="#">Consectetur adipisicing elit</a>
                        <a class="side-menu__link" href="#">Mauris mollis enim</a>
                        <a class="side-menu__link" href="#">Porta blandit</a>
                    </div>
                </div>
            </nav>`
        )

        this.element.querySelector('.side-menu__icon').addEventListener('click', () => {
            this.toggleMenu();
        })
    }

    mount() {
        this.render();
        this.update();
        return this.element;
    }

    update() {
        if (this.is_open) {
            this.element.classList.remove('side-menu--hidden');
        } else {
            this.element.classList.add('side-menu--hidden');
        }
    }

    toggleMenu() {
        this.is_open = !this.is_open;

        this.update();
    }

    /**
     * helper method, which takes a HTML string as an input
     * and returns a HTML element object
     */
     elementFromHTML(html) {
        const div = document.createElement('div');
        div.innerHTML = html.trim();
        return div.firstChild;
    }
}