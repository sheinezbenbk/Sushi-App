import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
  // Déclarez une variable pour stocker le nombre total de box sélectionnées
  totalBoxSelectionnees: number = 0;

  constructor() { }

  ngOnInit(): void {
    // Vous pouvez initialiser des valeurs ou effectuer d'autres opérations lors de l'initialisation du composant
  }

}
