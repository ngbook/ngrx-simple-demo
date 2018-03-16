import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: 'contact',
    loadChildren: 'app/contact/contact.module#ContactModule'
}, {
    path: '**',
    redirectTo: 'contact'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true,
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
