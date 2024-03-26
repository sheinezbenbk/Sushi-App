/**
* Représente la structure de données d'un Hacker
* L'id sera autogénéré par l'application (null si nouveau)
*/

import { Aliment } from "./Aliment";

export interface ibox {
    
    id: number, 
    nom: string, 
    pieces: number, 
    prix: number, 
    image: string, 
    aliments: Array<any>,
    saveurs: Array<string>;


    
    }