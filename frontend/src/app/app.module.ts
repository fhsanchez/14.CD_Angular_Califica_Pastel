import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RateCakeDetailComponent } from './rate/rate-cake-detail/rate-cake-detail.component';
import { CakesService } from './services/cakes.service';

@NgModule({
  declarations: [
    AppComponent,
    RateCakeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ CakesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
