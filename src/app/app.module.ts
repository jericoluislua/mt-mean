import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TicketCreateComponent } from "./tickets/ticket-create/ticket-create.component";
import { HeaderComponent } from "./header/header.component";
import { TicketListComponent } from "./tickets/ticket-list/ticket-list.component";

@NgModule({
  declarations: [
    AppComponent,
    TicketCreateComponent,
    HeaderComponent,
    TicketListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
