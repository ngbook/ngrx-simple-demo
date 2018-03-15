import { Contact } from '../models/contact.model';
import { ContactsActions } from '../actions/contacts.actions';

// 状态模型
export interface State {
    users: Contact[];
}

// 添加一个初始状态
export const initialState: State = {
    users: []
};

// contacts 的 reducer
export function reducer(state: State, action: ContactsActions): State {
    // 这里对 state 和 action 进行处理
    // ...
    console.log(action);
    return action.payload;
}
