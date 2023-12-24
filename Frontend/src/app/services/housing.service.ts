import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProperty } from '../interfaces/IProperty.interface';

@Injectable({
    providedIn: 'root'
})
export class HousingService {

    constructor(private http: HttpClient) { }

    getAllProperties(): Observable<IProperty[]> {
        return this.http.get("data/properties.json").pipe(
            map(data => {
                const propertiesArray: Array<IProperty> = data as IProperty[];
                return propertiesArray
            })
        );
        // return this.http.get("data/properties.json").pipe(
        //     map(data => {
        //         const propertiesArray: Array<IProperty> = [];
        //         for (var i of Object.values(data)){
        //             propertiesArray.push(i)
        //         }
        //         //console.log("I am at prop array");
        //         //console.log(typeof(propertiesArray));
        //         return propertiesArray
        //     })
        // );
    }
}
