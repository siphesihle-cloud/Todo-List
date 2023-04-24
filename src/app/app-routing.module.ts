import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodopageComponent } from './todopage/todopage.component';

const routes: Routes = [
  {path:'todopage', component:TodopageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
