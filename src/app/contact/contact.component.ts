import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromContacts from './contact.reducer';
import { Observable } from 'rxjs/Observable';
import { Contact } from './contact.model';
import { map } from 'rxjs/operators';

import { interval } from 'rxjs/observable/interval';
import { take } from 'rxjs/operators';
import * as contactAction from './contact.actions';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    contacts: Observable<any>;

    constructor(private store: Store<fromContacts.State>) {}

    ngOnInit() {
        this.contacts = this.store.pipe(
            select('contact'), // 先取出contact对应的reducer
            select(fromContacts.selectAll),
            map((d: any) => {
                // console.log(d);
                return d;
            })
        );
        // this.contacts.subscribe();
        // this.contacts.subscribe(d => {
        //     console.log(d);
        // });

    }

}
