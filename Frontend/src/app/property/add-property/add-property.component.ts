import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-property',
    templateUrl: './add-property.component.html',
    styleUrl: './add-property.component.css'
})
export class AddPropertyComponent implements OnInit{
    constructor(private route: Router) {

    }
    ngOnInit(): void { 
    }

    onBack() {
        this.route.navigate(['/']);
    }

    onSubmit(Form: NgForm) {
        console.log("Form submitted!");
        console.log(Form);
        
        
    }
}
