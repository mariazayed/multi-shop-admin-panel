import {
    Component,
    OnInit,
} from '@angular/core';
import { DigitalSubCategoryDB } from 'src/app/shared/data/tables/digital-sub-category';
import {
    ModalDismissReasons,
    NgbModal,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-digital-sub-category',
    templateUrl: './digital-sub-category.component.html',
    styleUrls: [ './digital-sub-category.component.scss' ],
})
export class DigitalSubCategoryComponent implements OnInit {
    public closeResult: string;
    public digital_sub_categories = [];
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
                title: 'Sub Category',
            },
        },
    };

    constructor(private modalService: NgbModal) {
        this.digital_sub_categories = DigitalSubCategoryDB.digitalSubCategory;
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
