import { Component } from '@angular/core';
import { Ligne } from '../../models/Ligne';
import { PanierManagerService } from '../../service/panier-manager.service';
import { Box } from '../../models/Box';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  monPanier: Array<Ligne>

  constructor(private panierManager: PanierManagerService) {
    // Utilisation du service PanierManagerService passé en paramètre pour initialiser une propriété monPanier
    // La méthode getPanier() du service est utilisée pour obtenir le panier
    this.monPanier = this.panierManager.getPanier()
  }
total(){
  return this.panierManager.totalPanier()
}

reduireQuantite(box: Box): void {
  // Récupérer la quantité actuelle de la boîte
this.panierManager.reduireAuPanier(box)
 
}

ajoutQuantite(box: Box): void {
  this.panierManager.addPanier(box)
}



}
