import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html',
    styleUrl: './user-register.component.css'
})
export class UserRegisterComponent implements OnInit {
    registrationForm!: FormGroup;
    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.createRegistrationForm();
    }

    createRegistrationForm() {
        this.registrationForm = this.fb.group({
            userName: ["Test1",Validators.required],
            email: ["", [Validators.required, Validators.email]],
            password: ["",[Validators.required, Validators.minLength(8)]],
            confirmPassword: ["",[Validators.required]],
            mobile: ["",[Validators.required, Validators.maxLength(10)]],
        }, { validators: this.passwordMatchingValidator });
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
