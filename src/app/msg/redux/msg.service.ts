import { Injectable } from '@angular/core';

@Injectable()
export class MsgService {

    packMsg(content: string) {
        const now = new Date();
        return {
            id: now.getTime(),
            content: content,
            time: now.toLocaleString()
        };
    }
}
