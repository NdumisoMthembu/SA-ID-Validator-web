import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: './views/validate/validate.module#ValidateModule' },
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes,{useHash:true})],
   declarations: [
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
