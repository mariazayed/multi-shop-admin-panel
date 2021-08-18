import {
    Component,
    OnInit,
} from '@angular/core';
import { ProductDB } from 'src/app/shared/data/tables/product-list';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: [ './product-list.component.scss' ],
})
export class ProductListComponent implements OnInit {

    public product_list = [];

    constructor() {
        this.product_list = ProductDB.product;
    }

    ngOnInit() {
    }


}
