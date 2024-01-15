import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { JeuComponent } from './pages/jeu/jeu.component';

const routes: Routes = [
  {path:"",
component:AccueilComponent},
  {path:"jeu",
component:JeuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
