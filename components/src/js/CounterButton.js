export default class CounterButton {
    // set input value as config
    constructor(config) {
        // set default values
        const defaults = {
            initial_count: 0,
            color: 'gray',
            shape: 'square',
        };
        config = {
            // our added in values
            ...defaults,
            ...config,
        };

        this.count = config.initial_count;
        this.color = config.color;
        this.shape = config.shape;
    }

    render() {
        // this is to create the html element
        this.element = document.createElement('button');

        this.element.addEventListener('click', (event) => {
            event.preventDefault();
            this.raiseCount();
        });
    }

    mount() {
        // this is to put the html element on the page
        this.render(); // prepares the html - need to do this
        this.update(); // updates the html with the current state - need to do this
        return this.element;
    }

    update() {
        // takes the current values (from the constructor or created elements!) and reflects that in the html code
        this.element.innerText = this.count;
    }

    raiseCount() {
        this.count++;

        this.update();
    }
}
