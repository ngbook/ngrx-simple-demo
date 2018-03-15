import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromContacts from './contacts';

export interface AllStates { // Store 的模型
    loadContacts: fromContacts.State;
}

// 定义 reducer 的处理过程
export const reducers: ActionReducerMap<AllStates> = {
    loadContacts: fromContacts.reducer,
};

export const metaReducers: MetaReducer<AllStates>[] = !environment.production ? [] : [];
