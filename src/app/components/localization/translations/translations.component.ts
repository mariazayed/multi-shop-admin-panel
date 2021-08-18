import {
    Component,
    OnInit,
} from '@angular/core';
import { TranslationsDB } from '../../../shared/data/tables/translations';

@Component({
    selector: 'app-translations',
    templateUrl: './translations.component.html',
    styleUrls: [ './translations.component.scss' ],
})
export class TranslationsComponent implements OnInit {

    public translations = [];
    public settings = {
        actions: {
            position: 'right',
        },
        columns: {
            user_key: {
                title: 'User Key',
            },
            russian: {
                title: 'Russian',
            },
            arabic: {
                title: 'Arabic',
            },
            english: {
                title: 'English',
            },
        },
    };

    constructor() {
        this.translations = TranslationsDB.data;
    }

    ngOnInit() {
    }

}
