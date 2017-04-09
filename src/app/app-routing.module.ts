import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './objects/main-view/main-view.component';

const routes: Routes = [
  {
    path: '',
    children: [],
  },
  {
    path: 'main',
    component: MainViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
