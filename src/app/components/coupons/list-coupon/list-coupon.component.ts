import {
    Component,
    OnInit,
} from '@angular/core';
import { ListCouponsDB } from 'src/app/shared/data/tables/list-coupon';

@Component({
    selector: 'app-list-coupon',
    templateUrl: './list-coupon.component.html',
    styleUrls: [ './list-coupon.component.scss' ],
})
export class ListCouponComponent implements OnInit {

    public digital_categories = [];
    public selected = [];

    constructor() {
        this.digital_categories = ListCouponsDB.listCoupons;
    }

    onSelect({ selected }) {
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }

    ngOnInit() {
    }


}
