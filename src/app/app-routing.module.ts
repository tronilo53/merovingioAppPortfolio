import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConocemeComponent } from './components/conoceme/conoceme.component';
import { HomeComponent } from './components/home/home.component';
import { LenguajesProgramacionComponent } from './components/lenguajes/lenguajes-programacion/lenguajes-programacion.component';
import { LenguajesComponent } from './components/lenguajes/lenguajes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'lenguajes', 
    component: LenguajesComponent,
    children: [
      { path: 'lenguajesPro', component: LenguajesProgramacionComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'lenguajesPro' }
    ]
  },
  { path: 'conoceme', component: ConocemeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
