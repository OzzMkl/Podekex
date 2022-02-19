//parte fundamental, púes este archivo se comunica con nuestro back
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, map } from "rxjs";

// modelos
import { PokemonDetail } from "../models/pokemonDetails";
import { PokemonList } from "../models/pokemonList";
// servicios
import { global } from "./global.service";

@Injectable()
export class PokemonService{
    public url: string;//declaramos la url publica a usar para todas las peticiones


    constructor(
        public _http: HttpClient
    ){

        this.url = global.url;
    }
    getResourcePokemon(namePokemon:any):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.get(this.url+'pokemon/'+namePokemon, {headers:headers} );
    }

    getPokemonList(offset: number, limit: number = 20):Observable<PokemonList[]>{
        return this._http.get<PokemonList[]>(this.url + 'pokemon?offset=' + offset + '&limit=' + limit)
        .pipe(
            map((x: any) => x.result)
        );
    }

    getPokemonDetail(pokemon: number | string):Observable<PokemonDetail>{
        return this._http.get<PokemonDetail>(this.url + 'pokemon/' + pokemon);
    }
}