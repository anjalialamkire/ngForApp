import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lists',
  imports: [CommonModule],
  templateUrl: './lists.html',
  styleUrl: './lists.scss',
})
export class Lists {
   
  skills : Array<string> = ['Angular-20', 'TypeScript', 'JavaScript', 'HTML', 'SCSS'];
}
