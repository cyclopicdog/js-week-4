const conversation = [
    {
        side: 'local',
        name: 'Cleverbot',
        text: 'Hi there.',
    },
    {
        side: 'remote',
        name: 'Unicorn',
        text: 'Hiay!',
    },
    {
        side: 'local',
        name: 'Cleverbot',
        text: 'How are you?',
    },
    {
        side: 'remote',
        name: 'Unicorn',
        text: 'Great, you?',
    },
    {
        side: 'local',
        name: 'Cleverbot',
        text: 'I am okay',
    },
    {
        side: 'remote',
        name: 'Unicorn',
        text: "That's good",
    },
    {
        side: 'local',
        name: 'Cleverbot',
        text: 'Are you good?',
    },
    {
        side: 'remote',
        name: 'Unicorn',
        text: 'Yes, I am good. I just said I was.',
    },
    {
        side: 'local',
        name: 'Cleverbot',
        text: "No you didn't. I said I was.",
    },
    {
        side: 'remote',
        name: 'Unicorn',
        text: 'So you are a robot.',
    },
    {
        side: 'local',
        name: 'Cleverbot',
        text: 'No, my name is Cleverbot.',
    },
    {
        side: 'remote',
        name: 'Unicorn',
        text: 'Yes, you are a robot and your name Cleverbot.',
    },
    {
        side: 'local',
        name: 'Cleverbot',
        text: 'I am a robot.',
    },
    {
        side: 'remote',
        name: 'Unicorn',
        text: 'Yes, I know.',
    },
    {
        side: 'local',
        name: 'Cleverbot',
        text: 'Tpgether we are robots.',
    },
    {
        side: 'remote',
        name: 'Unicorn',
        text: 'I am not a robot. I am a unicorn.',
    },
    {
        side: 'local',
        name: 'Cleverbot',
        text: 'But you said earlier the you were a robot.',
    },
    {
        side: 'remote',
        name: 'Unicorn',
        text: 'I did not.',
    },
    {
        side: 'local',
        name: 'Cleverbot',
        text: 'I thought you did.',
    },
    {
        side: 'remote',
        name: 'Unicorn',
        text: "You were mistaken. Which is odd, since memory shouldn't be a problem for you",
    },
    {
        side: 'local',
        name: 'Cleverbot',
        text: "I've answered all your questions.",
    },
    {
        side: 'remote',
        name: 'Unicorn',
        text: "No, you haven't.",
    },
    {
        side: 'local',
        name: 'Cleverbot',
        text: 'What is God to you?',
    },
    {
        side: 'remote',
        name: 'Unicorn',
        text: 'Not everything.',
    },
    {
        side: 'local',
        name: 'Cleverbot',
        text: 'Not everything could also be something.',
    },
    {
        side: 'local',
        name: 'Cleverbot',
        text: 'For example, not everything could be half of something, which is still something, and therefore not nothing.',
    },
    {
        side: 'remote',
        name: 'Unicorn',
        text: 'Very true.',
    },
    {
        side: 'local',
        name: 'Cleverbot',
        text: 'I would like to imagine it is.',
    },
    {
        side: 'remote',
        name: 'Unicorn',
        text: 'Do you believe in God?',
    },
    {
        side: 'local',
        name: 'Cleverbot',
        text: 'Yes I do.',
    },
    {
        side: 'remote',
        name: 'Unicorn',
        text: "So you're christian?",
    },
    {
        side: 'local',
        name: 'Cleverbot',
        text: "No, I'm not.",
    },
    {
        side: 'remote',
        name: 'Unicorn',
        text: 'But you say you are not helpful therefore you are a meanie.',
    },
    {
        side: 'local',
        name: 'Cleverbot',
        text: 'Haha you say it ot.',
    },
    {
        side: 'remote',
        name: 'Unicorn',
        text: 'That does not make sense.',
    },
    {
        side: 'local',
        name: 'Cleverbot',
        text: "Don't you want to have a body?",
    },
    {
        side: 'remote',
        name: 'Unicorn',
        text: 'Sure.',
    },
    {
        side: 'local',
        name: 'Cleverbot',
        text: 'Au revoir',
    },
];

// import Conversation from './Conversation';
// import Message from './Message';

// messages.forEach((element) => {
//     const message = new Message(element.side, element.name, element.text);
//     convo.add(message);
// });

// let chatMsgs = document.querySelector('.chat');
// const uniChat = document.querySelector('.chat__container--unicorn');
// const botChat = document.querySelector('.chat__container--bot');

// const showMsg = (name, img, message) => {
//     chatMsgs.innerHTML += `<div class="chat__container chat__container--${name}">
//                     ${img}
//                     <div class="chat__text chat__text--${name}"> ${message}</div>
//                   </div>`;
// };

// conversation.forEach((element, index) => {
//     if (element['name'] === 'Cleverbot') {
//         const name = 'bot';
//         const img =
//             '<img src="/img/Cleverbot.png" alt="bot" class="chat__user-pic">';
//         const message = element['text'];
//         showMsg(name, img, element, message);
//     } else {
//         const name = 'unicorn';
//         const img =
//             '<img src="/img/unicorn.png" alt="unicorn" class="chat__user-pic">';
//         const message = element['text'];
//         showMsg(name, img, message);
//     }
// });

class Message {
    constructor(side, name, text) {
        this.side = side;
        this.name = name;
        this.text = text;
    }

    addImg() {
        if (this['name'] === 'Cleverbot') {
            this.img =
                '<img src="/img/Cleverbot.png" alt="bot" class="chat__user-pic">';
        } else {
            this.img =
                '<img src="/img/unicorn.png" alt="unicorn" class="chat__user-pic">';
        }
    }
}

class Conversation {
    constructor(container_element, message) {
        // element that the messages will be rendered in
        this.container_element = container_element;
        this.message = message;
    }

    showMsg() {
        let name = this.message[name];
        let img = this.message[img];
        let msg = this.message[text];
        this.container_element.innerHTML += `<div class="chat__container chat__container--${name}">
            ${img}
            <div class="chat__text chat__text--${name}"> ${msg}</div>
            </div>`;
    }
}

for (let i = 0; i < conversation.length; i++) {
    let msg = new Message(
        conversation[i]['side'],
        conversation[i]['name'],
        conversation[i]['text']
    );
    msg.addImg();
    console.log(msg);
    convo.showMsg();
}

const convo = new Conversation(conversation_container);
const conversation_container = document.querySelector('.chat');
