import CounterButton from './CounterButton';

const button = new CounterButton({
    initial_count: 0,
    color: 'red',
    shape: 'square',
});

console.log(button);

// find the container on the page
const container = document.querySelector('.button-container');

// append the component to the container
container.appendChild(button.mount());
