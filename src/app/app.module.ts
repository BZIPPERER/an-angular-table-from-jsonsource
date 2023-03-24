import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsertableComponent } from './components/usertable/usertable.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; /* InPackage */
import { UserService } from './services/user.service';
//import other data services
@NgModule({
  declarations: 
  [
    AppComponent,
    UsertableComponent
  ],
  imports: 
  [
    BrowserModule,
    MatTableModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [UserService/* other Services registere*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
