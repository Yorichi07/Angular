import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[TasksComponent,TaskComponent, NewTaskComponent],
    exports:[TasksComponent],        //only need to mention components thats being used by other components, here only appcomponent is using taskscomponent. Now taskscomponent is using taskcomponent and newtaskcomponent but we dont need to mention them 
    imports:[CommonModule,SharedModule, FormsModule]
})
export class TasksModule{}