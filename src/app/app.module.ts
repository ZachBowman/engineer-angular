import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefenseComponent } from './defense/defense.component';
import { EnemyComponent } from './enemy/enemy.component';

@NgModule({
  declarations: [
    AppComponent,
    DefenseComponent,
    EnemyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
