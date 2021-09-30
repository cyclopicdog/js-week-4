/**
 * represents one message in a conversation
 */

export default class Message {
    constructor(side, name, text) {
        this.side = side;

        // name of sender
        this.name = name;

        // text of message
        this.text = text;

        // date, time etc.
        this.sent_at = null;

        // nt of thumbs up
        this.thumbs_up = 0;
    }
}
