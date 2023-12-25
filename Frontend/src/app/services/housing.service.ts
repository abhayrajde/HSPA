import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProperty } from '../interfaces/IProperty.interface';

@Injectable({
    providedIn: 'root'
})
export class HousingService {

    constructor(private http: HttpClient) { }

    getAllProperties(SellRent: number): Observable<IProperty[]> {
        return this.http.get("data/properties.json").pipe(
            map(data => {
                const propertiesArray = data as IProperty[];
                return propertiesArray.filter(item => item.SellRent === SellRent)
            })
        );
        // // Alternative Way
        // return this.http.get("data/properties.json").pipe(
        //     map(data => {
        //         const propertiesArray: Array<IProperty> = [];
        //         for (var property of Object(data)){
        //             if (property.SellRent === SellRent){
        //                 propertiesArray.push(property);
        //             }
        //         }
        //         return propertiesArray
        //     })
        // );
    }
}
