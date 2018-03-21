import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import * as fromContact from './contact.reducer';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { ContactEffects } from './contact.effects';

@NgModule({
    imports: [
        CommonModule,
        ContactRoutingModule,
        HttpClientModule,
        StoreModule.forFeature('contact', fromContact.reducer),
        EffectsModule.forFeature([ContactEffects]),
    ],
    declarations: [ContactComponent]
})
export class ContactModule { }
