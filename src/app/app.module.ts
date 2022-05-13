import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { ProgressComponent } from './progress/progress.component';
import { TriesComponent } from './tries/tries.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    ProgressComponent,
    TriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
