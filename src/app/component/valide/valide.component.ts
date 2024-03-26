import { Component } from '@angular/core';
import { AleatoireService } from '../../service/aleatoire.service';

@Component({
  selector: 'app-valide',
  templateUrl: './valide.component.html',
  styleUrl: './valide.component.css'
})
export class ValideComponent {


  constructor(private aleatoire: AleatoireService) { }

  generateRandomOrderNumber() {
    const orderNumber = this.aleatoire.generateOrderNumber();
    console.log('Numéro de commande généré :', orderNumber);
    return orderNumber
  }
}
