import {
    Component,
    OnInit,
} from '@angular/core';
import { DigitalListDB } from 'src/app/shared/data/tables/digital-list';

@Component({
    selector: 'app-digital-list',
    templateUrl: './digital-list.component.html',
    styleUrls: [ './digital-list.component.scss' ],
})
export class DigitalListComponent implements OnInit {
    public digital_list = [];
    public settings = {
        actions: {
            position: 'right',
        },
        columns: {
            id: {
                title: 'Id',
            },
            img: {
                title: 'Product',
                type: 'html',
            },
            title: {
                title: 'Product Title',
            },
            entry_type: {
                title: 'Entry Type',
            },
            quantity: {
                title: 'Quantity',
            },
        },
    };

    constructor() {
        this.digital_list = DigitalListDB.digitalList;
    }

    ngOnInit() {
    }

}
