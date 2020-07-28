import { HttpClient } from '@angular/common/http'; //vajag
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; //vajag

const API_URL = environment.apiUrl; //definejam API_URL
const API_KEY = environment.apiKey; //definejam API_KEY

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { } //injecting httpClient

getData(url){ //definejam funkciju getData
  return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`) //links uz saitu ko atgriez getData funkcija
}

}
