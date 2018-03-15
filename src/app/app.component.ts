import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { interval } from 'rxjs/observable/interval';
import { map, take, filter } from 'rxjs/operators';

import { AllStates } from './reducers';
import { LoadContacts, ContactsActions } from './actions/contacts.actions';
import * as fromContacts from './reducers/contacts';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private store: Store<AllStates>) {}

    ngOnInit() {
        interval(1000).pipe(take(5)).subscribe(d => {
            console.log('dispatching...');
            this.store.dispatch<ContactsActions>(new LoadContacts({
                users: [{
                    username: 'abc' + d,
                    avatar: 'xxx',
                }]
            }));
        });
    }

    get contacts() {
        return this.store.pipe(
            select('loadContacts'),
            filter(d => !!d),
            map((data: any) => {
                return data && data.users ? data.users : [];
            }),
        );
    }
}
