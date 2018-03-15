import { Action } from '@ngrx/store';
import { Contact } from '../models/contact.model';
import { State, initialState } from '../reducers/contacts';

export enum ContactsActionTypes {
    ContactsAction = '[Contacts] Loading contacts.'
}

export class LoadContacts implements Action {
    readonly type = ContactsActionTypes.ContactsAction;
    constructor(public payload: State = initialState) {}
}

export type ContactsActions = LoadContacts;
