import { Injectable } from '@angular/core';
import { json } from 'stream/consumers';

const TOKEN= 'ecom-token';
const USER= 'ecom-user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  public saveToken(token: string):void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  public saveUser(user: string):void{
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(TOKEN, JSON.stringify(user));
  }
}
