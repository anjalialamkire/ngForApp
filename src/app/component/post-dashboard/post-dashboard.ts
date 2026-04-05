import { Component } from '@angular/core';
import { PostCard } from '../post-card/post-card';
import { postData } from '../../const/post';

@Component({
  selector: 'app-post-dashboard',
  imports: [PostCard],
  templateUrl: './post-dashboard.html',
  styleUrl: './post-dashboard.scss',
})
export class PostDashboard {
      postArr = postData
}
