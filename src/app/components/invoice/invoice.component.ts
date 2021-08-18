import {
    Component,
    OnInit,
} from '@angular/core';
import { InvoiceDB } from '../../shared/data/tables/invoice';

@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: [ './invoice.component.scss' ],
})
export class InvoiceComponent implements OnInit {

    public invoice = [];
    public settings = {
        actions: {
            position: 'right',
        },
        columns: {
            no: {
                title: 'No',
            },
            invoice: {
                title: 'Invoice',
            },
            date: {
                title: 'Date',
            },
            shipping: {
                title: 'Shipping',
            },
            amount: {
                title: 'Amount',
            },
            tax: {
                title: 'Tax',
            },
            total: {
                title: 'Total',
            },
        },
    };

    constructor() {
        this.invoice = InvoiceDB.data;
    }

    ngOnInit() {
    }

}
