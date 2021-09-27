import {
    richFolk,
    getNames,
    search,
    switch_anything,
    startRichSearch,
} from './rich-people-functions.js';

getNames(richFolk);

// checkboxes in html

let netW = document.querySelector('#netW');
let country = document.querySelector('#country');
let source = document.querySelector('#source');
let age = document.querySelector('#age');
let mStatus = document.querySelector('#mStatus');

// checkbox ticked toggle - not working - how do I pass the right value into it?

// const keyToggle = (checkbox) => {
//   if (checkbox === false) {
//     checkbox = true;
//     startRichSearch();
//   } else {
//     checkbox = false;
//     startRichSearch();
//   }
// }

netW.addEventListener('click', () => {
    switch_anything('showNet');
});

country.addEventListener('click', () => {
    switch_anything('showCountry');
});

source.addEventListener('click', () => {
    switch_anything('showSource');
});

age.addEventListener('click', () => {
    switch_anything('showAge');
});

mStatus.addEventListener('click', () => {
    switch_anything('showStatus');
});
// to search a string

// to read the search automatically
const findRichy = document.querySelector('#findRichy');

findRichy.addEventListener('keyup', () => {
    return startRichSearch();
});
