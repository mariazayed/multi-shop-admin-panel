import {
    Component,
    OnInit,
} from '@angular/core';
import { DigitalCategoryDB } from 'src/app/shared/data/tables/digital-category';
import {
    ModalDismissReasons,
    NgbModal,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-digital-category',
    templateUrl: './digital-category.component.html',
    styleUrls: [ './digital-category.component.scss' ],
})
export class DigitalCategoryComponent implements OnInit {
    public closeResult: string;
    public digital_categories = [];
    public settings = {
        actions: {
            position: 'right',
        },
        columns: {
            img: {
                title: 'Image',
                type: 'html',
            },
            product_name: {
                title: 'Name',
            },
            price: {
                title: 'Price',
            },
            status: {
                title: 'Status',
                type: 'html',
            },
            category: {
                title: 'Category',
            },
        },
    };

    constructor(private modalService: NgbModal) {
        this.digital_categories = DigitalCategoryDB.digitalCategory;
    }

    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${ result }`;
        }, (reason) => {
            this.closeResult = `Dismissed ${ this.getDismissReason(reason) }`;
        });
    }

    ngOnInit() {
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${ reason }`;
        }
    }

}
