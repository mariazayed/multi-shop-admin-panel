import {
    Component,
    OnInit,
} from '@angular/core';
import { TransactionsDB } from 'src/app/shared/data/tables/transactions';

@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.component.html',
    styleUrls: [ './transactions.component.scss' ],
})
export class TransactionsComponent implements OnInit {

    public transactions = [];
    public settings = {
        actions: false,
        hideSubHeader: true,
        columns: {
            order_id: {
                title: 'Order Id',
                filter: false,
            },
            transaction_id: {
                title: 'Transaction Id',
                filter: false,
            },
            date: {
                title: 'Date',
                filter: false,
            },
            pay_method: {
                title: 'Payment Method',
                filter: false,
                type: 'html',
            },
            delivery_status: {
                title: 'Delivery Status',
                filter: false,
            },
            amount: {
                title: 'Amount',
                filter: false,
            },
        },
    };

    constructor() {
        this.transactions = TransactionsDB.data;
    }

    ngOnInit() {
    }

}
