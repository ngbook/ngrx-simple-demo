import { Contact } from '../contact/contact.model';

export interface Msg {
    id?: number;
    receiver?: Contact;
    sender?: Contact; // 为空时表示这是自己发的消息
    content: string;
    time: string;
}
