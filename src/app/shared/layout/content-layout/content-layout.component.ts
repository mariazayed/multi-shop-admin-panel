import {
    Component,
    OnInit,
} from '@angular/core';
import { NavService } from '../../service/nav.service';
import {
    transition,
    trigger,
    useAnimation,
} from '@angular/animations';
import { fadeIn } from 'ng-animate';

@Component({
    selector: 'app-content-layout',
    templateUrl: './content-layout.component.html',
    styleUrls: [ './content-layout.component.scss' ],
    animations: [
        trigger('animateRoute', [
            transition('* => *', useAnimation(fadeIn, {
                // Set the duration to 5seconds and delay to 2 seconds
                //params: { timing: 3}
            })),
        ]),
    ],
})
export class ContentLayoutComponent implements OnInit {

    public rightSideBar: boolean;
    public layoutType = 'RTL';
    public layoutClass = false;

    constructor(public navServices: NavService) {
    }

    public getRouterOutletState(outlet) {
        return outlet.isActivated
                ? outlet.activatedRoute
                : '';
    }

    public rightSidebar($event) {
        this.rightSideBar = $event;
    }

    public clickRtl(val) {
        if (val === 'RTL') {
            document.body.className = 'rtl';
            this.layoutClass = true;
            this.layoutType = 'LTR';
        } else {
            document.body.className = '';
            this.layoutClass = false;
            this.layoutType = 'RTL';
        }
    }

    ngOnInit() {
    }
}
