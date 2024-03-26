import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetBoxService {

  constructor(private http:HttpClient) { } // fais des requetes get pour recuperer les données de l'API et les afficher 


    public getBox() : Observable<any> {
      console.log(environment.apiBaseUrl) 

    return this.http.get(environment.apiBaseUrl);
    
  
    }}
  

