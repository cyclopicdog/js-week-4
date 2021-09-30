const clickMe = document.querySelector('#exercise_fixed_box');

clickMe.addEventListener('click', () => {
    clickMe.classList.toggle('clicked');
});

const daddyBox = document.querySelector('#exercise_bg_box');

daddyBox.addEventListener('click', () => {
    daddyBox.classList.toggle('not-the-same');
    console.log('wtf?');
});
