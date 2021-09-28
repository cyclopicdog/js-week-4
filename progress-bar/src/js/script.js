import {
    up,
    down,
    percent,
    setBar,
    input,
    changeBar,
    useInput,
} from './prog-bar.js';

setBar(percent);
console.log(percent);

down.addEventListener('click', () => {
    return changeBar('down');
});

up.addEventListener('click', () => {
    return changeBar('up');
});

input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        console.log('pressed');
        return useInput();
    }
});

// How to target the spinners?

// input.addEventListener('click', (event) => {
//     if (event.keyCode === 13) {
//         console.log('pressed');
//         return useInput();
//     }
// });
