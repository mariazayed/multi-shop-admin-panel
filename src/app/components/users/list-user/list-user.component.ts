import {
    Component,
    OnInit,
} from '@angular/core';
import { UserListDB } from 'src/app/shared/data/tables/list-users';

@Component({
    selector: 'app-list-user',
    templateUrl: './list-user.component.html',
    styleUrls: [ './list-user.component.scss' ],
})
export class ListUserComponent implements OnInit {
    public user_list = [];
    public settings = {
        columns: {
            avatar: {
                title: 'Avatar',
                type: 'html',
            },
            fName: {
                title: 'First Name',
            },
            lName: {
                title: 'Last Name',
            },
            email: {
                title: 'Email',
            },
            last_login: {
                title: 'Last Login',
            },
            role: {
                title: 'Role',
            },
        },
    };

    constructor() {
        this.user_list = UserListDB.listUser;
    }

    ngOnInit() {
    }

}

