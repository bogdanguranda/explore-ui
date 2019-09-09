import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ScrollingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: PlanetListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    PlanetListComponent,
    StatusComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
