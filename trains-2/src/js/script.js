const departures = [
    {
        time: { hrs: 8, mins: 14 },
        train: 'Acela Express',
        no: 2153,
        to: 'Washington, DC',
        status: 'On Time',
        track: 2,
    },
    {
        time: { hrs: 8, mins: 19 },
        train: 'New Haven Line',
        no: 1541,
        to: 'Grand Central Terminal',
        status: 'On Time',
        track: 14,
    },
    {
        time: { hrs: 8, mins: 14 },
        train: 'Harry Express',
        no: 2153,
        to: 'Washington, DC',
        status: 'On Time',
        track: 2,
    },
    {
        time: { hrs: 8, mins: 19 },
        train: 'New Heaven Line',
        no: 1541,
        to: 'Grand Central Terminal',
        status: 'On Time',
        track: 14,
    },
    {
        time: { hrs: 8, mins: 14 },
        train: 'Barry Express',
        no: 2153,
        to: 'Washington, DC',
        status: 'On Time',
        track: 2,
    },
    {
        time: { hrs: 8, mins: 19 },
        train: 'Old Haven Line',
        no: 1541,
        to: 'Grand Central Terminal',
        status: 'On Time',
        track: 14,
    },
];

//////// Jana's time converter - it's amazing, I'm so happy I just spent 20 minutes of my life understanding that I don't want the function she made even if it is really nice!
// // Change the input array to contain objects instead of just numbers
// const departure2 = [];

// for (let i = 0; i < departures.length; i++) {
//   if (departures[i] % 60 === 0) {
//     document.querySelector(".time-table").innerHTML += departures[i] / 60;
//   } else {
//     const hours = Math.floor(departures[i] / 60);
//     const minutes = departures[i] % 60;
//     departure2.push({
//       hrs: hours,
//       mins: minutes,
//     });
//   }
// }
// console.log(departure2);

// for (let i = 0; i < departure2.length; i++) {
//   document.querySelector(
//     ".time-table"
//   ).innerHTML += `<tr><td>${departure2[i].hrs}:${departure2[i].mins}</td></tr>`;
// }

// the elementFromHTML has been modified to make the parent element 'div' by default
// then you can add the parent element to it if you want - because this is a table we need to
// specify tbody (table body) as the parent element to stop the div changing the table row to a normal
// element

const elementFromHTML = (html, parent = 'div') => {
    const div = document.createElement(parent);
    div.innerHTML = html;
    return div.firstChild;
};

const timetableTimes = document.querySelector('.trains__table-body');

departures.forEach((element) => {
    const tableRow =
        '<tr class="trains__times"><td>' +
        element['time']['hrs'] +
        ':' +
        element['time']['mins'] +
        '</td>' +
        '<td>' +
        element['train'] +
        '</td>' +
        '<td>' +
        element['no'] +
        '</td>' +
        '<td>' +
        element['to'] +
        '</td>' +
        '<td class="trains__status"><input type="number" class="trains__delay-length" id="delayLength">' +
        element['status'] +
        '</td>' +
        '<td>' +
        element['track'] +
        '</td><td><button class="trains__btn">Delayed</button></td></tr>';
    const newRow = elementFromHTML(tableRow, 'tbody');
    timetableTimes.appendChild(newRow);
});

let table = document.querySelector('tbody');
console.log(table);

// get the button

const delayButton = document.querySelectorAll('.trains__btn');

// get the html elements to be changed - the index will match

const changeStatus = document.querySelectorAll('.trains__status');

// change the status

delayButton.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const delayed = departures[index]['status'];
        if (delayed === 'On Time') {
            addDelay(index);

            console.log(changeStatus[index]);
        } else {
            departures[index]['status'] = 'On Time';
            changeStatus[index].textContent = 'On Time';
            changeStatus[index].classList.remove('trains__status--delayed');
        }
    });
});

// get the input

const delayInput = document.querySelectorAll('.trains__delay-length');

// function for adding the delay length

const addDelay = (index) => {
    delayInput[index].style.display = 'block';
    delayInput[index].addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
            const delay = delayInput[index].value;
            departures[index]['status'] = { delay: Number(delay) };
            changeStatus[index].textContent = `Delay: ${delay} minutes`;
            changeStatus[index].classList.add('trains__status--delayed');
            console.log(departures);
        }
    });
};
