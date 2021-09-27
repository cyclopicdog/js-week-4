import { data } from './data.js';

const richFolk = JSON.parse(data);
// !!!! Rather than have seperate variables have
// !!!! an object to work with and then search through the object for the value
// !!!! and then use that to tell the checkbox what to do

const status = {
    showNet: false,
    showCountry: false,
    showSource: false,
    showAge: false,
    showStatus: false,
};

const getNames = (list) => {
    for (let i = 0; i < list.length; i++) {
        const nameList = document.querySelector('.richpeeps__list');
        let name = list[i]['name'];
        nameList.innerHTML += '<li>' + name + '</li>';
    }
};

const switch_anything = (what) => {
    if (!status[what]) {
        status[what] = true;
        startRichSearch();
    } else {
        status[what] = false;
        startRichSearch();
    }
};

const search = (string, array) => {
    //html to change
    const nameList = document.querySelector('.richpeeps__list');

    // clear previous search so we don't build a list of all letter searches

    nameList.innerHTML = '';
    // this needs to happen before the loop or the loop will just reset itself

    for (let i = 0; i < array.length; i++) {
        // make both items lower case
        const searchingFor = string.toLowerCase();
        const beingSearched = array[i]['name'].toLowerCase();

        // the name to be printed if a match is found
        let name = array[i]['name'];

        // the value of the search result
        let isThere = beingSearched.indexOf(searchingFor);

        // if the result returns a valid index print the name

        if (isThere > -1) {
            nameList.innerHTML += '<li>' + name + '</li>';
            // add other key values
            if (status['showNet']) {
                nameList.innerHTML +=
                    'Networth: $' + array[i]['networth'] + '<br>';
            }
            if (status['showCountry']) {
                nameList.innerHTML +=
                    'Country: ' + array[i]['country'] + '<br>';
            }
            if (status['showSource']) {
                nameList.innerHTML +=
                    'Source of wealth: ' + array[i]['source'] + '<br>';
            }
            if (status['showAge']) {
                nameList.innerHTML += 'Age: ' + array[i]['age'] + '<br>';
            }
            if (status['showStatus']) {
                nameList.innerHTML +=
                    'Marital status: ' + array[i]['status'] + '<br>';
            }
        }
    }
};

// to search

const startRichSearch = () => {
    search(findRichy.value, richFolk);
};

export { richFolk, getNames, switch_anything, search, startRichSearch };
