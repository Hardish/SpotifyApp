import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista:any = { };
  pistas:any[] = [ ];

  constructor(private _activatedRoute: ActivatedRoute,
              public  spotifyService: SpotifyService) { }

  ngOnInit() {
    this._activatedRoute.params
        .pipe(map(parametros => parametros['id']))
        .subscribe( id => {
          console.log(id)
          this.spotifyService.getArtista(id)
              .subscribe( artista => {
                console.log(artista);
                this.artista = artista;
              });

          this.spotifyService.getTop(id)
              .pipe(map((respuesta:any) => respuesta.tracks))
              .subscribe( top =>{
                console.log(top);
                this.pistas = top;
              })
        })
  }

}
