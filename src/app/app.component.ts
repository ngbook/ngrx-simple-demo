import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { interval } from 'rxjs/observable/interval';
import { take } from 'rxjs/operators';

import * as contactAction from './contact/contact.actions';
import * as fromContacts from './contact/contact.reducer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private store: Store<fromContacts.State>) { }

    ngOnInit() {
        // interval(1000).pipe(take(5)).subscribe(d => {
        //     console.log('dispatching...');
        //     const contact = {
        //         id: '' + d,
        //         username: 'abc' + d,
        //         avatar: 'xxx' + d,
        //     };

        //     this.store.dispatch(new contactAction.AddContact({
        //         contact: contact
        //     }));
        // });
    }

}
