import {
    Component,
    OnInit,
} from '@angular/core';
import { CategoryDB } from '../../../../shared/data/tables/category';
import {
    ModalDismissReasons,
    NgbModal,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: [ './category.component.scss' ],
})
export class CategoryComponent implements OnInit {
    public closeResult: string;
    public categories = [];
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
        this.categories = CategoryDB.category;
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
