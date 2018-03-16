import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromContact from './contact.reducer';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ContactRoutingModule,
        StoreModule.forFeature('contact', fromContact.reducer),
    ],
    declarations: [ContactComponent]
})
export class ContactModule { }
