import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AleatoireService {

  constructor() { }


  generateOrderNumber(length: number = 8): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let orderNumber = '';
    for (let i = 0; i < length; i++) {
      orderNumber += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return orderNumber;
  }

}
