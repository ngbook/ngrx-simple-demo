import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromContacts from './redux/contact.reducer';
import * as fromMsg from '../msg/redux/msg.reducer';
import { ChangeReceiver, AddMsg } from '../msg/redux/msg.actions';
import { AllState } from '../states';
import { Observable } from 'rxjs/Observable';
import { Contact } from './contact.model';
import { map } from 'rxjs/operators';

import { interval } from 'rxjs/observable/interval';
import { take } from 'rxjs/operators';
import * as contactAction from './redux/contact.actions';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    contacts: Observable<any>;
    selected = this.store.pipe(
        select(fromMsg.selectReceiver)
    );

    constructor(private store: Store<AllState>) {}

    ngOnInit() {
        this.contacts = this.store.pipe(
            select(fromContacts.selectAll)
        );
        // 列表加载完时，默认选择第一个好友
        this.contacts.subscribe((list: Contact[]) => {
            if (list && list.length > 0) {
                this.selectContact(list[0]);
            }
        });
    }

    selectContact(contact: Contact) {
        this.store.dispatch(
            new ChangeReceiver({
                target: contact
            }));
    }
}
