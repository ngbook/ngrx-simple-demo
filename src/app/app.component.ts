import { Component, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { interval } from 'rxjs/observable/interval';
import { take } from 'rxjs/operators';

import * as contactAction from './contact/contact.actions';
import * as fromContacts from './contact/contact.reducer';

const PAGE_SIZE = 5;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    constructor(private store: Store<fromContacts.State>) { }

    ngAfterViewInit() {
        interval(3000).pipe(
            take(3)
        ).subscribe((i) => {
            console.log('dispatching...');
            this.store.dispatch(new contactAction.FetchContacts({
                start: i * PAGE_SIZE,
                pageSize: PAGE_SIZE
            }));
        });
    }

}
