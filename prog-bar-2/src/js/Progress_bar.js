export default class Progress_bar {
    constructor(value, color) {
        this.value = value;
        this.color = color;
    }

    render() {
        this.chunk_of_html = this.createHTMLElement(
            `<div class="individual-bar-component-holder">
                <p class="prog-bar__value">${this.value}</p>
                <div class="prog-bar__container">
                    <button class="prog-bar__button prog-bar__button--down">
                        &minus;
                    </button>
                    <div class="prog-bar__bar-holder">
                        <div class="prog-bar__bar prog-bar__bar--${this.color}"></div>
                    </div>
                    <button class="prog-bar__button prog-bar__button--up">
                        &plus;
                    </button>
                </div>
            </div>`
        );
        const up_btn = this.chunk_of_html.querySelector(
            '.prog-bar__button--up'
        );
        const down_btn = this.chunk_of_html.querySelector(
            '.prog-bar__button--down'
        );

        // const value = this.chunk_of_html.querySelector('.prog-bar__value');

        // const bar = this.chunk_of_html.querySelector('.prog-bar__bar');

        down_btn.addEventListener('click', () => {
            console.log('clicked!');
            this.value--;
            this.update();
        });

        up_btn.addEventListener('click', () => {
            console.log('clicked!');
            this.value++;
            this.update();
        });
    }

    mount() {
        this.render();
        this.update();
        return this.chunk_of_html;
    }

    update() {
        let rgb_value = this.value * 17;
        let width_value = (rgb_value / 255) * 100;
        if (rgb_value >= 0 && rgb_value <= 255) {
            this.chunk_of_html.querySelector('.prog-bar__value').textContent =
                rgb_value;
            this.chunk_of_html.querySelector(
                '.prog-bar__bar'
            ).style.width = `${width_value}%`;
        }
    }

    // tool to make html
    createHTMLElement(html, container = 'div') {
        const div = document.createElement(container);
        div.innerHTML = html;
        return div.firstChild;
    }
}
