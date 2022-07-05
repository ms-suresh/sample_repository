import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseTrackerRoutingModule } from './expense-tracker-routing.module';
import { ExpenseTrackerComponent } from './expense-tracker.component';



@NgModule({
  declarations: [
    
  
    ExpenseTrackerComponent
  ],
  imports: [
    CommonModule,
    ExpenseTrackerRoutingModule
  ]
})
export class ExpenseTrackerModule { }
