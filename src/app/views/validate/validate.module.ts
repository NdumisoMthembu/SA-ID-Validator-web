import { FilterPipe } from './../../pipes/filter.pipe';
import { ValidateResultsComponent } from './validate-results/validate-results.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateComponent } from './validate.component';
import { ValidateRoutingModule } from './validate-routing.module';
import { ValidateIdFormComponent } from './validate-id-form/validate-id-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    ValidateRoutingModule,FormsModule, ReactiveFormsModule
  ],
  declarations: [ValidateComponent,ValidateIdFormComponent,ValidateResultsComponent,FilterPipe]
})
export class ValidateModule { }
