import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html',
    styleUrl: './user-register.component.css'
})
export class UserRegisterComponent implements OnInit {
    registrationForm!: FormGroup;
    constructor() {}

    ngOnInit(): void {
        this.registrationForm = new FormGroup({
            userName: new FormControl()
        });
    }
    onSubmit() {
        console.log(this.registrationForm);
        
    }
}
