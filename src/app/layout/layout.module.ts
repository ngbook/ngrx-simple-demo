import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { NgButtonModule } from 'ngbook-kits/ng-button';
import { LayoutComponent } from './layout.component';
import * as fromContact from '../contact/redux/contact.reducer';
import * as fromMsg from '../msg/redux/msg.reducer';
import { ContactComponent } from '../contact/contact.component';
import { EffectsModule } from '@ngrx/effects';
import { ContactEffects } from '../contact/redux/contact.effects';
import { LayoutRoutingModule } from './layout-routing.module';
import { MsgComponent } from '../msg/msg.component';
import { MsgEffects } from '../msg/redux/msg.effects';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forFeature('contact', fromContact.reducer),
        StoreModule.forFeature('msg', fromMsg.reducer),
        EffectsModule.forFeature([ContactEffects, MsgEffects]),
        LayoutRoutingModule,
        NgButtonModule
    ],
    declarations: [
        ContactComponent,
        MsgComponent,
        LayoutComponent,
    ]
})
export class LayoutModule { }
