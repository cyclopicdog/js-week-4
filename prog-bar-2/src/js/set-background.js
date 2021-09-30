const red_bar = new Progress_bar(0, 'red');
const green_bar = new Progress_bar(0, 'green');
const blue_bar = new Progress_bar(0, 'blue');

bars_holder.appendChild(red_bar.mount());
bars_holder.appendChild(green_bar.mount());
bars_holder.appendChild(blue_bar.mount());

export const set_background = () => {
    document.querySelector(
        'body'
    ).style.backgroundColor = `rgb(${red_bar.value}, ${green_bar.value}, ${blue_bar.value})`;
};
