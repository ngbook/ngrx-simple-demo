import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Action } from '@ngrx/store';
import { Contact } from '../contact.model';
import {
    ContactActions,
    ContactActionTypes,
    FetchContacts,
    AddContacts,
    ContactsReqErr,
} from './contact.actions';

@Injectable()
export class ContactEffects {

    constructor(
        private actions$: Actions,
        private http: HttpClient) { }

    @Effect()
    contacts: Observable<ContactActions> = this.actions$.pipe(
        ofType<ContactActions>(ContactActionTypes.FetchContacts),
        mergeMap((action: FetchContacts) => this.http.post(
                'https://api.ngbook.techzto.com/people',
                action.payload
            ).pipe(
                map((data: any) => new AddContacts({
                    contacts: data.data && data.data.list || []
                }),
                catchError(err => of(new ContactsReqErr(err)))
            ))
        )
    );
}
