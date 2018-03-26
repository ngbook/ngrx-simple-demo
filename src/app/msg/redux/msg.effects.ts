import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { MsgService } from './msg.service';
import {
    MsgActions,
    MsgActionTypes,
    AddMsg,
    AutoRsp,
} from './msg.actions';

@Injectable()
export class MsgEffects {

    constructor(
        private actions$: Actions,
        private msgService: MsgService) { }

    @Effect() // 自动回复 ok
    rspMsg: Observable<MsgActions> = this.actions$.pipe(
        ofType<MsgActions>(MsgActionTypes.AddMsg),
        mergeMap((action: AddMsg) => of(
            new AutoRsp({
                msg: this.msgService.packMsg('ok')
            })
        )
    ));
}
