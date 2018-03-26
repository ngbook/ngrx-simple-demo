import { State as msgState } from './msg/redux/msg.reducer';
import { State as contactState } from './contact/redux/contact.reducer';

export interface AllState {
    msg: msgState;
    contact: contactState;
}
