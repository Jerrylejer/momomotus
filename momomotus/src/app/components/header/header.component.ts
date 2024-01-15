import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Interpolation qui renvoie la valeur du LS dans le header
  prenom: any;
  // Boolean pour rendre la modale visible ou non
  displayStyle = "none";

  ngOnInit(): void {
    // Au chargement de la page, je récupère dans ma variable la valeur du LS 
      this.prenom = localStorage.getItem('prénom');
  }

  openHelp() {
    this.displayStyle = "block";
  }

  closeHelp() {
    this.displayStyle = "none";
  }
}
