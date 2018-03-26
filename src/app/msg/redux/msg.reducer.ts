import {
    EntityState,
    EntityAdapter,
    createEntityAdapter
} from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Msg } from '../msg.model';
import { MsgActions, MsgActionTypes } from './msg.actions';
import { Contact } from '../../contact/contact.model';

export interface State extends EntityState<Msg> {
    receiver?: Contact ;
}

export const adapter: EntityAdapter<Msg> = createEntityAdapter<Msg>();

export const initialState: State = adapter.getInitialState({
    receiver: null
});

export function reducer(
    state = initialState,
    action: MsgActions
): State {
    switch (action.type) {
        case MsgActionTypes.AddMsg: {
            const msg = action.payload.msg;
            msg.receiver = state.receiver;
            return adapter.addOne(msg, state);
        }

        case MsgActionTypes.UpsertMsg: {
            return adapter.upsertOne(action.payload.msg, state);
        }

        case MsgActionTypes.AddMsgs: {
            return adapter.addMany(action.payload.msgs, state);
        }

        case MsgActionTypes.UpsertMsgs: {
            return adapter.upsertMany(action.payload.msgs, state);
        }

        case MsgActionTypes.UpdateMsg: {
            return adapter.updateOne(action.payload.msg, state);
        }

        case MsgActionTypes.UpdateMsgs: {
            return adapter.updateMany(action.payload.msgs, state);
        }

        case MsgActionTypes.DeleteMsg: {
            return adapter.removeOne(action.payload.id, state);
        }

        case MsgActionTypes.DeleteMsgs: {
            return adapter.removeMany(action.payload.ids, state);
        }

        case MsgActionTypes.LoadMsgs: {
            return adapter.addAll(action.payload.msgs, state);
        }

        case MsgActionTypes.ClearMsgs: {
            return adapter.removeAll(state);
        }

        case MsgActionTypes.ChangeReceiver: {
            return Object.assign({}, state, {
                receiver: action.payload.target});
        }

        case MsgActionTypes.AutoRsp: {
            const msg = action.payload.msg;
            msg['sender'] = state.receiver;
            return adapter.addOne(msg, state);
        }

        default: {
            return state;
        }
    }
}

export const msgState = createFeatureSelector<State>('msg');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors(msgState);

export const selectReceiver = createSelector(msgState,
    (state: State) => {
        return state.receiver;
    });
