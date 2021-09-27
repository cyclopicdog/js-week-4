import { conversation } from './data.js';

let chatMsgs = document.querySelector('.chat');
let index = 0;

export const showMsg = (name, img, message) => {
    chatMsgs.innerHTML += `<div class="chat__container chat__container--${name}">
                    ${img}
                    <div class="chat__text chat__text--${name}"> ${message}</div>
                  </div>`;
};

export const chatNow = () => {
    const element = conversation[index];
    if (element['name'] === 'Cleverbot') {
        const name = 'bot';
        const img =
            '<img src="/img/Cleverbot.png" alt="bot" class="chat__user-pic">';
        const message = element['text'];
        showMsg(name, img, message);
    } else {
        const name = 'unicorn';
        const img =
            '<img src="/img/unicorn.png" alt="unicorn" class="chat__user-pic">';
        const message = element['text'];
        showMsg(name, img, message);
    }

    if (index < conversation.length - 1) {
        index++;
        setTimeout(chatNow, 5);
    }
};
