import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    authUser(user: any) {
        let UserArray = [];
        const usersData = localStorage.getItem('Users');
        if (usersData !== null) {
            UserArray = JSON.parse(usersData);
        }
        return UserArray.find((p: { userName: any; password: any; }) => p.userName === user.userName && p.password === user.password)
    }
}
