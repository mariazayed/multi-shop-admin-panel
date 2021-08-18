import {
    Component,
    OnInit,
} from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { MediaDB } from 'src/app/shared/data/tables/media';

@Component({
    selector: 'app-media',
    templateUrl: './media.component.html',
    styleUrls: [ './media.component.scss' ],
})
export class MediaComponent implements OnInit {

    public media = [];
    public settings = {

        columns: {
            img: {
                title: 'Image',
                type: 'html',
            },
            file_name: {
                title: 'File Name',
            },
            url: {
                title: 'Url',
            },
        },
    };
    public config1: DropzoneConfigInterface = {
        clickable: true,
        maxFiles: 1,
        autoReset: null,
        errorReset: null,
        cancelReset: null,
    };

    constructor() {
        this.media = MediaDB.data;
    }

    ngOnInit() {
    }

}
