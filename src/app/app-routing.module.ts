import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZipFormComponent } from './zip-form/zip-form.component';
import { ZipChangeComponent } from './zip-change/zip-change.component';

const routes: Routes = [
  { path: 'zip-form', component: ZipFormComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'zip-edit', component: ZipChangeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
