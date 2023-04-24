import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodopageComponent } from './todopage/todopage.component';
import {MatListModule} from '@angular/material/list';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    TodopageComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
