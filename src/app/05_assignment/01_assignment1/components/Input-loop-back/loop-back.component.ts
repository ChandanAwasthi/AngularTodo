import { Component } from '@angular/core';

@Component({
  selector: 'app-loop-back',
  template: `
    <input #box (input) = 'call(box.value)'>
    <p>{{first}}</p>
  `
})
export class LoopbackComponent {
    first;
  call(value){
       this.first = value;
    }
 }