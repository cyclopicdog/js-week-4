const down = document.querySelector('.prog-bar__button--down');
const up = document.querySelector('.prog-bar__button--up');
const bar = document.querySelector('.prog-bar__bar');
const value = document.querySelector('.prog-bar__value');

// value for prog bar

let percent = 10 * value.textContent.split('/', 1);

export { down, up, bar, value, percent };
