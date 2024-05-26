import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

// import { HeaderComponent } from './header/header.component';
// import { UserComponent } from './user/user.component';
// import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

//typescript feature-@component
@Component({
  selector: 'app-root',
  //standalone: true,     using NgModule approach
  //imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users=DUMMY_USERS;
  selectedUserId?:string;    //? means it can be null too

  get selectedUser(){
    return this.users.find((user)=> user.id===this.selectedUserId)!;  //by adding ! at the end we are telling TS that it will never have null value
  }

  onSelectUser(id:string){
    this.selectedUserId=id;
  }
}
