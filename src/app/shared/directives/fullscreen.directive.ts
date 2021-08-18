import {
    Directive,
    HostListener,
} from '@angular/core';

import * as screenfull from 'screenfull';
import { Screenfull } from 'screenfull';

@Directive({
    selector: '[toggleFullscreen]',
})
export class ToggleFullscreenDirective {
    @HostListener('click') onClick() {
        if ((<Screenfull>screenfull).isEnabled) {
            (<Screenfull>screenfull).toggle();
        }
    }
}
