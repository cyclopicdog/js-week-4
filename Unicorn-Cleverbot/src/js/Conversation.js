/*
 * represents the entire conversation being shown
 */

export default class Conversation {
    constructor(container_element) {
        // element that the messages will be rendered in
        this.container_element = container_element;

        // the messages of this conversation
        this.messages = [];
    }
    addMessage(message) {
        // render the given message in this conversation's
        // container element

        this.innerHTML += `<div class="chat__container chat__container--${name}">
             ${img}
             <div class="chat__text chat__text--${name}"> ${msg}</div>
             </div>`;
    }
}
