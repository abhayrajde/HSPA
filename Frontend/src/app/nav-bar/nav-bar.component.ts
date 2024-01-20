import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
    loggedInStatus: boolean = false;
    public loggedinUser!: string | null;

    constructor(private toastr: ToastrService) {}

    ngOnInit(): void {
    }

    loggedIn() {
        this.loggedinUser = localStorage.getItem('token');
        this.loggedInStatus = true;
        return this.loggedinUser;
        // if (localStorage.getItem('token')){
        //     this.loggedinUser = localStorage.getItem('token');
        //     this.loggedInStatus = true;
        //     return this.loggedinUser;
        // }
    }
    onLogout() {
        localStorage.removeItem('token');
        this.loggedInStatus = false;
        this.toastr.success("You have logged out successfully!")
    }
}
