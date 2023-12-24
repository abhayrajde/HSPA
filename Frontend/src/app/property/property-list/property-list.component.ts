import { Component, OnInit } from '@angular/core';
import { IProperty } from '../../interfaces/IProperty.interface';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit{
    
    properties: Array<IProperty> = [];

    constructor(private housingService: HousingService) {}
    
    ngOnInit(): void {
        this.housingService.getAllProperties().subscribe({
            next: (data: Array<IProperty>) => {
              this.properties = data;
              // console.log(this.properties);
            },
            error: (error: any) => {
              console.log(error);
            }
          });  
    }
}
