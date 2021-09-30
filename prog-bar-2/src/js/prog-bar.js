// import { bar, value, percent } from './prog-bar-elements.js';

const down = document.querySelector('.prog-bar__button--down');
const up = document.querySelector('.prog-bar__button--up');
const bar = document.querySelector('.prog-bar__bar');
const value = document.querySelector('.prog-bar__value');

let input = document.querySelector('.prog-bar__value-set');

// value for prog bar

let percent = 10 * value.textContent.split('/', 1);

const setBar = (percent) => {
    bar.style.width = percent + '%';
    value.textContent = Math.floor(percent / 10) + '/10';
};
const changeBar = (direction) => {
    if (direction === 'up' && percent < 100) {
        percent += 10;
        setBar(percent);
    } else if (direction === 'down' && percent > 0) {
        percent -= 10;
        setBar(percent);
    }
};

const useInput = () => {
    let value = input.value;
    if (value <= 10 && value >= 0) {
        percent = value * 10;
        setBar(percent);
    } else {
        alert("It's out of 10 dum dum!");
    }
};

export { up, down, bar, value, percent, input, setBar, changeBar, useInput };
