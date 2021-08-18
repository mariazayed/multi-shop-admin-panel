import {
    Component,
    OnInit,
} from '@angular/core';
import { MenuDB } from 'src/app/shared/data/tables/menu';

@Component({
    selector: 'app-list-menu',
    templateUrl: './list-menu.component.html',
    styleUrls: [ './list-menu.component.scss' ],
})
export class ListMenuComponent implements OnInit {

    public menus = [];
    public selected = [];

    constructor() {
        this.menus = MenuDB.data;
    }

    onSelect({ selected }) {
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }

    ngOnInit() {
    }

}
