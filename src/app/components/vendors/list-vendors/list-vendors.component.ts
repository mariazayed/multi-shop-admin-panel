import {
    Component,
    OnInit,
} from '@angular/core';
import { VendorsDB } from '../../../shared/data/tables/vendor-list';

@Component({
    selector: 'app-list-vendors',
    templateUrl: './list-vendors.component.html',
    styleUrls: [ './list-vendors.component.scss' ],
})
export class ListVendorsComponent implements OnInit {
    public vendors = [];
    public settings = {
        actions: {
            position: 'right',
        },
        columns: {
            vendor: {
                title: 'Vendor',
                type: 'html',
            },
            products: {
                title: 'Products',
            },
            store_name: {
                title: 'Store Name',
            },
            date: {
                title: 'Date',
            },
            balance: {
                title: 'Wallet Balance',
            },
            revenue: {
                title: 'Revenue',
            },
        },
    };

    constructor() {
        this.vendors = VendorsDB.data;
    }

    ngOnInit() {
    }

}
