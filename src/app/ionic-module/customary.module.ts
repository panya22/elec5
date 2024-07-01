import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const cModules: any = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
]
@NgModule({
    imports: cModules,
    exports: cModules
})
export class CustomaryModule { }
