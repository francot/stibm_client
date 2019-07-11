import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'directions', pathMatch: 'full' },
  { path: 'directions', loadChildren: './pages/directions/directions.module#DirectionsPageModule' },
  { path: 'directions/:id', loadChildren: './pages/direction-details/direction-details.module#DirectionDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
