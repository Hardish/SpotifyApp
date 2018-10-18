import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  urlSpotify:string = 'https://api.spotify.com/v1/';
  token:string = 'BQBwR_OCWGeHq9aMrpsHn3f-qimTQU4gpjpVG73HvZTp1RM2OvGgrVm9sXTQsu9vOH1HaC8TGwjRj5sHLrmM0a5xzBR-eeUnKV-sG2G85HyB1QeEMOFXcSikZgEKs6D14E2MQWoS2zXJpO5joxQWjZaAsNMAXePqzv8T1r-oE5vNyEU6nPm0&refresh_token=AQA8WBQnLToDgUZtJJHT_y5pp4OKttGq471sI2V-mGh2DFlklwVx7-RIYlDgoXHjr5lr0bMjM155FGCzxMWcLed__yMjgntLWMX09J9AdKTFZ-7J95XaAS2XNqvw5ANXNtteXA';

  constructor(public http: HttpClient) { 
    console.log('Service started at spotify!');
  }

  private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });

    return headers;
  }

  getArtista(id: string){
    let url = `${this.urlSpotify}artists/${id}`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers })
  }

  getArtist(termino:string){
    let url = `${this.urlSpotify}search?query=${termino}&type=artist&limit=20`

    let headers = this.getHeaders();

    return this.http.get(url, { headers })
               .pipe(map( (respuesta:any) =>{
                      this.artistas = respuesta.artists.items;
                      return this.artistas;   
               })
              )}
  getTop(id: string){
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=PY`

    let headers = this.getHeaders();

    return this.http.get(url, { headers })
  }
}
