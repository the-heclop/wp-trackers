import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZipFormComponent } from './zip-form/zip-form.component';

const routes: Routes = [
  { path: 'zip-form', component: ZipFormComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
