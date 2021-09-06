import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './DataBinding.component';


@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [DataBindingComponent],
    declarations: [DataBindingComponent],
})
export class DataBindingModule { }
