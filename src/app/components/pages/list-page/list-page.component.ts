import {
    Component,
    OnInit,
} from '@angular/core';
import { ListPagesDB } from 'src/app/shared/data/tables/list-pages';

@Component({
    selector: 'app-list-page',
    templateUrl: './list-page.component.html',
    styleUrls: [ './list-page.component.scss' ],
})
export class ListPageComponent implements OnInit {
    public list_pages = [];
    public selected = [];

    constructor() {
        this.list_pages = ListPagesDB.listPages;
    }

    onSelect({ selected }) {
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }

    ngOnInit() {
    }

}
