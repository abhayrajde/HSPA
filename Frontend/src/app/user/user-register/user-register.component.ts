import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html',
    styleUrl: './user-register.component.css'
})
export class UserRegisterComponent implements OnInit {
    registrationForm!: FormGroup;
    user!: User;
    userSubmitted: boolean = false;
    constructor(private fb: FormBuilder,private userService: UserService) {}

    ngOnInit(): void {
        this.createRegistrationForm();
    }

    createRegistrationForm() {
        this.registrationForm = this.fb.group({
            userName: ["",Validators.required],
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
        this.userSubmitted = true;
        if(this.registrationForm.valid) {
            // this.user = Object.assign(this.user, this.registrationForm.value);
            this.userService.addUser(this.userData());
            this.registrationForm.reset();
            this.userSubmitted = false;
        }
    }    

    userData(): User {
        return this.user = {
            userName: this.userName.value,
            email: this.email.value,
            password: this.password.value,
            mobile: this.mobile.value,
        }
    }
}
