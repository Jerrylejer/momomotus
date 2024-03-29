import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  constructor(private router: Router){}
  // ReactiveForms
  myForm!: FormGroup;
  // Initialisation du formulaire
  ngOnInit() {
    this.myForm = new FormGroup({
      valeur: new FormControl(''),
    });
  }
  // Je récupère la valeur de l'input (2 way bidding)
  valeur?: any;
  // Je stocke ma valeur dans le localStorage sous forme de clé-valeur
  // Je redirige à la page de jeu
  // Je réinitialise l'input à la soumission du formulaire
  storeName(form: FormGroup) {
    const data: String = this.valeur;
    const prenom = JSON.stringify(data);
    localStorage.setItem('prénom', prenom);
    this.router.navigate(['/jeu']);
    this.valeur = '';
  }
}
