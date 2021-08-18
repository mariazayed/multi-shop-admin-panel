import {
    Component,
    EventEmitter,
    OnInit,
    Output,
} from '@angular/core';
import { NavService } from '../../service/nav.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ],
})
export class HeaderComponent implements OnInit {
    rightSidebar = false;
    open = false;
    openNav = false;
    isOpenMobile;

    @Output() rightSidebarEvent = new EventEmitter<boolean>();

    constructor(public navServices: NavService) {
    }

    collapseSidebar() {
        this.open = !this.open;
        this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
    }

    right_side_bar() {
        this.rightSidebar = !this.rightSidebar;
        this.rightSidebarEvent.emit(this.rightSidebar);
    }

    openMobileNav() {
        this.openNav = !this.openNav;
    }

    ngOnInit() {
    }
}
