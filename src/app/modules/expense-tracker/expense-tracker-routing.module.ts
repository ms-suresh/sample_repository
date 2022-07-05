import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseTrackerComponent } from './expense-tracker.component';


const routes: Routes = [

{ path: '', redirectTo: 'expense-tracker', pathMatch: 'full' },
 {
  path:'expense-tracker',component:ExpenseTrackerComponent,
  children:[
    {

    }
  ]
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseTrackerRoutingModule { }
