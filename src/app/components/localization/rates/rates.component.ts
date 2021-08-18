import {
    Component,
    OnInit,
} from '@angular/core';
import { RateDB } from '../../../shared/data/tables/rate';

@Component({
    selector: 'app-rates',
    templateUrl: './rates.component.html',
    styleUrls: [ './rates.component.scss' ],
})
export class RatesComponent implements OnInit {
    public rate = [];
    public settings = {
        actions: {
            position: 'right',
        },
        columns: {
            title: {
                title: 'Currency Title',
            },
            usd: {
                title: 'USD',
            },
            code: {
                title: 'Code',
            },
            rate: {
                title: 'Exchange Rate',
            },
        },
    };

    constructor() {
        this.rate = RateDB.data;
    }

    ngOnInit() {
    }

}
