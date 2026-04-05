import { Component } from '@angular/core';
import { Istd } from '../../model/std';

@Component({
  selector: 'app-std',
  imports: [],
  templateUrl: './std.html',
  styleUrl: './std.scss',
})
export class Std {
   stdArr:Array<Istd>=[
    {
      fname:'John',
      lname:'Doe',
      email:'jhon@gmail.com',
      contact:9934567890,
      stdId:'123'
    },{
    fname:'jen',
      lname:'Doe',
      email:'jen@gmail.com',
      contact:9834567890,
      stdId:'123'
    },{
      fname:'May',
      lname:'Doe',
      email:'May@gmail.com',
      contact:8834567890,
      stdId:'125'
    },{
      fname:'june',
      lname:'Doe',
      email:'june@gmail.com',
      contact:9984567890,
      stdId:'126'
    }
  ]
}
