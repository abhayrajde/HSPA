import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user: User) {
    let users = [];
    const storedUsersString = localStorage.getItem('Users');
    if (storedUsersString !== null) {
        users = JSON.parse(storedUsersString);
        users = [...users, user];
    } else {
        users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
}
}
