const rating_value = document.querySelector('.rating__value');
let rating = rating_value.textContent;
const stars = document.querySelectorAll('.rating__star');

console.log(stars);

//stars.forEach((element, index) => {

for (let index = 0; index < stars.length; index++) {
    stars[index].addEventListener('click', () => {
        rating = index + 1;
        set_rating();
    });
}

const set_rating = () => {
    //wipe the stars
    for (let index = 0; index < stars.length; index++) {
        if (stars[index].classList.contains('rating__star--on')) {
            stars[index].classList.remove('rating__star--on');
        }
    }

    // make the stars match the rating
    for (let index = 0; index < rating; index++) {
        if (!stars[index].classList.contains('rating__star--on')) {
            stars[index].classList.add('rating__star--on');
        }

        rating_value.textContent = rating;

        console.log(rating);
    }
};
