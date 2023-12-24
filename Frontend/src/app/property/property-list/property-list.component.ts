import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit{
    ngOnInit(): void {
    }

    properties: Array<any> = 
    [{
        "Id": 1,
        "Type": "Home",
        "Name": "Deerfield",
        "Price": 12000
    },
    {
        "Id": 2,
        "Type": "Home",
        "Name": "Brisco",
        "Price": 12000
    },
    {
        "Id": 3,
        "Type": "Home",
        "Name": "Trento",
        "Price": 12000
    },
    {
        "Id": 4,
        "Type": "Home",
        "Name": "Meadow Park",
        "Price": 12000
    }]
}
