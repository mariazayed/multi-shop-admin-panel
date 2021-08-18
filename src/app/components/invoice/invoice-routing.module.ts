import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes,
} from '@angular/router';
import { InvoiceComponent } from './invoice.component';


const routes: Routes = [
    {
        path: '',
        component: InvoiceComponent,
        data: {
            title: 'Invoice',
            breadcrumb: 'Invoice',
        },
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class InvoiceRoutingModule {
}
