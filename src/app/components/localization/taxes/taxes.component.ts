import {
    Component,
    OnInit,
} from '@angular/core';
import { TaxesDB } from '../../../shared/data/tables/taxes';

@Component({
    selector: 'app-taxes',
    templateUrl: './taxes.component.html',
    styleUrls: [ './taxes.component.scss' ],
})
export class TaxesComponent implements OnInit {
    public taxes = [];
    public settings = {
        actions: {
            position: 'right',
        },
        columns: {
            detail: {
                title: 'Tax Detail',
            },
            tax_schedule: {
                title: 'Tax Schedule',
            },
            rate: {
                title: 'Tax Rate',
            },
            total_amount: {
                title: 'Total Tax Amount',
            },
        },
    };

    constructor() {
        this.taxes = TaxesDB.data;
    }

    ngOnInit() {
    }

}
