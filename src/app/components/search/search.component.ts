import { Component, OnInit } from '@angular/core';

import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{
  termino:string = '';
  constructor(public spotifyService: SpotifyService) { }

  SearchArtista(){

    if(this.termino.length == 0){
      return;
    }

    this.spotifyService.getArtist(this.termino)
        .subscribe();
  }

}
