import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatIconModule} from '@angular/material';
import { AppComponent } from './app.component';
import { TicketCreateComponent } from './tickets/ticket-create/ticket-create.component';
import { HeaderComponent } from './header/header.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BaseComponent } from './base/base.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

const material = [
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatIconModule
];

@NgModule({
  declarations: [
    AppComponent,
    TicketCreateComponent,
    HeaderComponent,
    TicketListComponent,
    LoginComponent,
    AdminComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularSvgIconModule,
    RouterModule.forRoot([{
      path: '',
      component: BaseComponent
    },{
      path: 'login',
      component: LoginComponent
    }, {
      path: 'admin',
      component: AdminComponent
    }]),
    [material],
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
