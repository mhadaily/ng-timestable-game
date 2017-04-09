import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopFishesComponent } from './objects/top-fishes/top-fishes.component';
import { BottomSeaComponent } from './objects/bottom-sea/bottom-sea.component';
import { MainViewComponent } from './objects/main-view/main-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TopFishesComponent,
    BottomSeaComponent,
    MainViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {
}
