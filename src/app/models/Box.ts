import { ibox } from "./IBox";
import { Aliment } from "./Aliment";
export class Box implements ibox {

    id: number
    nom: string
    pieces: number
    prix: number
    image: string
    aliments: Array<any>
    saveurs: Array<string>

    constructor(id:number, nom:string, pieces:number, prix:number, image:string ){
        this.id=id
        this.nom=nom
        this.pieces=pieces
        this.prix=prix
        this.image=image
        this.aliments= []
        this.saveurs= []

    }

    


}



