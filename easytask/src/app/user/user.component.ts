import { Component, EventEmitter, Input, Output, computed, input, output } from '@angular/core';

import {type User} from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
    selector: 'app-user',
    //standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    //imports: [CardComponent]
})
export class UserComponent {
  // when using signals
  // avatar=input.required<string>();
  // name=input.required<string>();

  // imagePath=computed(()=>{ 
  //   return 'assets/users/'+this.avatar()
  // });
  // select = output<string>();

  @Input({required:true}) selected!:boolean;
  @Input({ required: true }) user!: User ;
  @Output() select = new EventEmitter<string>();  //now to access event object emmitted use $event argument inside event handler

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
