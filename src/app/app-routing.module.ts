import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pokemon', component: PokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
