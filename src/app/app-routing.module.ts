import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConocemeComponent } from './components/conoceme/conoceme.component';
import { HomeComponent } from './components/home/home.component';
import { FrameworksComponent } from './components/lenguajes/frameworks/frameworks.component';
import { LenguajesProgramacionComponent } from './components/lenguajes/lenguajes-programacion/lenguajes-programacion.component';
import { LenguajesComponent } from './components/lenguajes/lenguajes.component';
import { LibreriasComponent } from './components/lenguajes/librerias/librerias.component';
import { OtrosComponent } from './components/lenguajes/otros/otros.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'lenguajes', 
    component: LenguajesComponent,
    children: [
      { path: 'lenguajesPro', component: LenguajesProgramacionComponent },
      { path: 'frameworks', component: FrameworksComponent },
      { path: 'librerias', component: LibreriasComponent },
      { path: 'otros', component: OtrosComponent },
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
