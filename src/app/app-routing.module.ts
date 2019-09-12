import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CricketShowComponent } from './cricket-show/cricket-show.component';


const routes: Routes = [
  { path: '', component: CricketShowComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
