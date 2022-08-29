import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LenguajesComponent } from './components/lenguajes/lenguajes.component';
import { ConocemeComponent } from './components/conoceme/conoceme.component';
import { FrameworksComponent } from './components/lenguajes/frameworks/frameworks.component';
import { LibreriasComponent } from './components/lenguajes/librerias/librerias.component';
import { OtrosComponent } from './components/lenguajes/otros/otros.component';
import { LenguajesProgramacionComponent } from './components/lenguajes/lenguajes-programacion/lenguajes-programacion.component';
import { ScrollToTopComponent } from './components/shared/scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LenguajesComponent,
    ConocemeComponent,
    FrameworksComponent,
    LibreriasComponent,
    OtrosComponent,
    LenguajesProgramacionComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
