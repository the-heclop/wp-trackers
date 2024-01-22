import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StopsFormComponent } from './stops-form/stops-form.component';

const routes: Routes = [
  { path: 'stops-form', component: StopsFormComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
