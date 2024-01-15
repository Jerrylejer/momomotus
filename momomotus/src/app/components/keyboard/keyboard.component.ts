import { Component } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent {
// Dans le parent, on va créer un tableau avec tous les caractères.
typingLetters: string[] = [
  'A',
  'Z',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  'Q',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'M',
  'W',
  'X',
  'C',
  'V',
  'B',
  'N',
  'SUPPRIMER',
  'VALIDER'
];
}
