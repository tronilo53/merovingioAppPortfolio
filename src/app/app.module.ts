import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SectionComponent } from './components/shared/section/section.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
