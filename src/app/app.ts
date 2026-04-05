import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lists } from "./component/lists/lists";
import { Std } from './component/std/std';
import { PostDashboard } from './component/post-dashboard/post-dashboard';

@Component({
  selector: 'app-root',
  imports: [Lists,Std,PostDashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ngForApp');
    
  counter = signal(10);

  onClick(){
    this.counter.set(this.counter() + 1); 
  }
}
