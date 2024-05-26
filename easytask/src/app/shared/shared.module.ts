import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
    declarations:[CardComponent],
    exports:[CardComponent]     //so that it will be available to all components
})
export class SharedModule{}