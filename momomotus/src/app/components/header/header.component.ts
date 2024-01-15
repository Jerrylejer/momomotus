import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  prenom: any;

  ngOnInit(): void {
      this.prenom = localStorage.getItem('prénom');
  }


}
