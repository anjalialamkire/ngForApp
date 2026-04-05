import { Component, Input } from '@angular/core';
import { Ipost } from '../../model/post';

@Component({
  selector: 'app-post-card',
  imports: [],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss',
})
export class PostCard {
    
   @Input() postObj!: Ipost
}
