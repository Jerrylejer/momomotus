import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent {
  
  rows = Array.from({ length: 6 }, (_, i) => i);
  cols = Array.from({ length: 8 }, (_, i) => i);
  
}
