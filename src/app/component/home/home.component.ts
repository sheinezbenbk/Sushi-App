import { Component } from '@angular/core';
import { Box } from '../../models/Box';
import { Aliment } from '../../models/Aliment';
import { GetBoxService } from '../../service/get-box.service';
import { PanierManagerService } from '../../service/panier-manager.service';
import { Ligne } from '../../models/Ligne';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'

})

export class HomeComponent {


  boxDetail: Box | null
  boxes: Array<Box> = [] //création d'un tableau vide 

  constructor(private boxs: GetBoxService, private panierManager: PanierManagerService) {
    this.boxDetail = null

    this.boxs.getBox().subscribe((resultat) => {
      console.log(resultat);


      for (const uneBox of resultat) {
        // Création d'une nouvelle instance de Box en utilisant les données de uneBox
        let boxInstance = new Box(
          uneBox.id,
          uneBox.nom,
          uneBox.pieces,
          uneBox.prix,
          uneBox.image,

        );

        for (let aliment of uneBox.aliments) {
          let alimentInstance = new Aliment(aliment.nom, aliment.quantite);
          boxInstance.aliments.push(alimentInstance)
        }

        for (let saveur of uneBox.saveurs) {
          boxInstance.saveurs.push(saveur)
        }


        this.boxes.push(boxInstance);
      }
    });
  }

  onDetails(laBox: Box) {
    this.boxDetail = laBox
    console.log(this.boxDetail)
  }

  // Ajoute la box sélectionnée au panier
  ajouterAuPanier(uneBox: Box) {
    this.panierManager.addPanier(uneBox)
  }


  reduireAupanier(uneBox: Box) {
    this.panierManager.reduireAuPanier(uneBox)
  }

  

}
