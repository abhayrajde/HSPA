import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { IProperty } from '../../interfaces/IProperty.interface';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit{
    SellRent = 1
    properties: Array<IProperty> = [];

    constructor(private route: ActivatedRoute, private housingService: HousingService) {}
    
    ngOnInit(): void {
      if(this.route.snapshot.url.toString()) {
        this.SellRent = 2;
      }
      this.housingService.getAllProperties(this.SellRent).subscribe({
          next: (data: Array<IProperty>) => {
            this.properties = data;
          },
          error: (error: any) => {
            console.log(error);
          }
        });  
    }
}
