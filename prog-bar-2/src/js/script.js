import Progress_bar from './Progress_bar';

const bars_holder = document.querySelector('.bars-holder');

const red_bar = new Progress_bar(0, 'red');
const green_bar = new Progress_bar(0, 'green');
const blue_bar = new Progress_bar(0, 'blue');

bars_holder.appendChild(red_bar.mount());
bars_holder.appendChild(green_bar.mount());
bars_holder.appendChild(blue_bar.mount());

const set_background = () => {
    document.querySelector('body').style.backgroundColor = `rgb(${
        red_bar.value * 17
    }, ${green_bar.value * 17}, ${blue_bar.value * 17})`;
};

const bar_action = document.querySelector('.bars-holder');

bar_action.addEventListener('click', () => {
    return set_background();
});
