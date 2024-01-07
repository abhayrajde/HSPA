import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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
            userName: new FormControl("Test",Validators.required),
            email: new FormControl("", [Validators.required, Validators.email]),
            password: new FormControl("",[Validators.required, Validators.minLength(8)]),
            confirmPassword: new FormControl("",[Validators.required]),
            mobile: new FormControl("",[Validators.required, Validators.maxLength(10)]),
        }, { validators: this.passwordMatchingValidator});
    }

    passwordMatchingValidator(control: AbstractControl): ValidationErrors | null {
        return (control.get('password')?.value === control.get('confirmPassword')?.value) ? null : 
        {notMatched: true};
    }

    // Getter method for all form controls
    //----------------------------------------------------------------------------
    get userName() {
        return this.registrationForm.get('userName') as FormControl;
    }

    get email() {
        return this.registrationForm.get('email') as FormControl;
    }

    get password() {
        return this.registrationForm.get('password') as FormControl;
    }

    get confirmPassword() {
        return this.registrationForm.get('confirmPassword') as FormControl;
    }

    get mobile() {
        return this.registrationForm.get('mobile') as FormControl;
    }
    // -----------------------------------------------------------------------------
    
    onSubmit() {
        console.log(this.registrationForm);
        
    }
}
