import { NgModule } from '@angular/core';
import { Assignment1Component } from './containers/assignment1.component';
import { LoopbackComponent } from './components/Input-loop-back/loop-back.component';
import { KeyUpComponent } from './components/event-keyup/keyup.component';

@NgModule({
  declarations: [
    Assignment1Component,
    LoopbackComponent,
    KeyUpComponent
  ],
  exports: [
    Assignment1Component
    
  ]
})
export class Assignment1Module {

}
