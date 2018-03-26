import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromMsg from './redux/msg.reducer';
import { AllState } from '../states';
import { AddMsg } from './redux/msg.actions';
import { Observable } from 'rxjs/Observable';
import { map, filter, combineLatest, take } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Contact } from '../contact/contact.model';
import { MsgTool } from './redux/msg.tool';
import { Msg } from './msg.model';

@Component({
    selector: 'app-msg',
    templateUrl: './msg.component.html',
    styleUrls: ['./msg.component.scss']
})
export class MsgComponent implements OnInit {
    text = '';

    receiver = this.store.pipe(
        select(fromMsg.selectReceiver)
    );
    msgs = this.store.pipe(
        select(fromMsg.selectAll), // 取出全部
        combineLatest(this.receiver), // 整合 receiver 数据以下用
        map(obs => {
            const msgs = obs[0];
            const receiver = obs[1];
            // console.log(msgs, receiver);
            return msgs.filter( // 根据 receiver 信息做过滤
                (msg: any) => msg.receiver === receiver
                    || msg.sender === receiver
            );
        }),
    );

    constructor(private store: Store<AllState>) { }
    ngOnInit() {
    }

    sendMsg() {
        if (!this.text.trim()) {
            return;
        }
        this.store.dispatch(
            new AddMsg({
                msg: MsgTool.packMsg(this.text)
            })
        );
        this.text = '';
    }
}
