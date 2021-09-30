export default class Sidemenu {
    /**
     * initializes the object (component) when it is being created
     * can be used to pass additional information to the object
     * that is useful for its initialization
     *
     * defines properties of this object, especially those that define
     * this component's state
     */
    constructor(menu_state = 'closed') {
        // initialize properties that define the state of this component:
        // the only value that changes this component's state is one that says
        // if it is open or closed

        this.menu_state = menu_state;
    }

    /**
     * creates this component's HTML representation in the form of a HTML
     * element
     *
     * also activates the element and its children if necessary, by attaching
     * event listeners
     */
    render() {
        // create a HTML element from the given HTML code (below) and insert it into
        // this object's property this.element
        this.element = this.elementFromHTML(`<nav class="side-menu">
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
        </nav>`);
        // find the .side-menu__icon element in this components element (this.element)
        // activate the icon element by attaching an event listener to it
        // when the icon is clicked
        // call this object's method toggleMenu

        const menu_btn = this.element.querySelector('.side-menu__icon');
        menu_btn.addEventListener('click', this.toggleMenu);
    }

    /**
     * calls render to create the HTML element of this component
     * calls update to reflect the initial state of the component
     * (optionally inserts the element somewhere in the document)
     * returns the HTML element of this component
     */
    mount() {
        // call this object's render method to create its HTML element
        // call this object's update method to show the current (initial) state
        // return this object's element property
        this.render();
        this.update();
        return this.element;
    }

    /**
     * updates the HTML element of this component to reflect this
     * component's current state
     */
    update() {
        // if the state property (that you defined in the constructor) says
        // that the menu is open
        // remove the class "side-menu--hidden" from this component's element (this.element)
        // otherwise
        // add the class "side-menu--hidden" to this component's element (this.element)
        const element = this.element;
        if ((element.state = 'closed')) {
            element.classList = 'side-menu--visible';
        } else {
            element.classList = 'side-menu--hidden';
        }
    }
    /**
     * toggles the state properties of this component to reflect that it is visible if it
     * is shown and vice-versa
     *
     * because it manipulates this component's state it MUST also call this
     * component's update method
     */
    toggleMenu() {
        // if the state property (that you defined in the constructor) contains
        // the information that the menu is open
        // change it so that it contains information that the menu is closed
        // otherwise
        // change it so that it contains information that the menu is open
        // call this object's update method
        if (this.state === 'closed') {
            this.state = 'open';
        } else {
            this.state = 'closed';
        }
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
