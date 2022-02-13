import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers:[PokemonService]
})
export class PokemonComponent implements OnInit {

  pokemon:any;
  pokemonInformation : any

  constructor( private _pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(){
    this.pokemon = 'pikachu'
    this._pokemonService.getResourcePokemon(this.pokemon).subscribe(
      response =>{
        this.pokemonInformation = response.sprites.other.dream_world.front_default
        console.log(this.pokemonInformation)
      }, error =>{
        console.log(error)
      }
    );
  }

}
