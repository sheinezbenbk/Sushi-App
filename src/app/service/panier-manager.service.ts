import { Injectable } from '@angular/core';
import { Ligne } from '../models/Ligne';
import { Box } from '../models/Box';


@Injectable({
  providedIn: 'root'
})
export class PanierManagerService {
  public panier: Array<Ligne>
  constructor() { 
    this.panier=JSON.parse(localStorage.getItem("lesBoxes") ?? "[]")
  }

  getPanier() {
    return this.panier
  
}


// Définition de la fonction setPanier qui prend un tableau d'objets de type Ligne en paramètre
setPanier(boxes: Array<Ligne>) {
  // Création d'une variable locale panier qui contient le contenu du tableau boxes
  let panier = boxes;

  // Stockage du contenu de panier dans le stockage local du navigateur sous la clé "lesBoxes"
  localStorage.setItem("lesBoxes", JSON.stringify(panier));
}


addPanier(uneBox:Box){
  this.getPanier()
  let avoirBox = false
  let quantite = 1
  let ligne=new Ligne(quantite,uneBox)
  for (const uneLigne of this.panier){
    if (uneLigne.uneBox.id == uneBox.id ){
      uneLigne.quantite++
      avoirBox=true
    }
  }



  if(avoirBox==false){
    this.panier.push(ligne)
  }
  console.log(this.panier)
  localStorage.setItem("lesBoxes", JSON.stringify(this.panier))
}


reduireAuPanier(uneBox:Box){
  let indexToRemove = -1;
  for (let i = 0; i < this.panier.length; i++) {
    if (this.panier[i].uneBox.id === uneBox.id) {
      if (this.panier[i].quantite > 1) {
        this.panier[i].quantite--;
      } else {
        indexToRemove = i;
      }
      break;
    }
  }

  if (indexToRemove !== -1) {
    this.panier.splice(indexToRemove, 1);
 
  }

  console.log(this.panier);
  localStorage.setItem("lesBoxes", JSON.stringify(this.panier));
}





totalPanier(){
  let total =0
  for (const ligne of this.panier){
    total+= ligne.uneBox.prix * ligne.quantite
  }
  return total
}



}

