import { Component, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { timer } from 'rxjs/observable/timer';

import * as contactAction from './contact/redux/contact.actions';
import * as fromContacts from './contact/redux/contact.reducer';

const PAGE_SIZE = 20;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    constructor(private store: Store<fromContacts.State>) { }

    ngAfterViewInit() {
        timer(3000).subscribe(() => {
            this.store.dispatch(new contactAction.FetchContacts({
                start: 20,
                pageSize: PAGE_SIZE
            }));
        });
    }

}
