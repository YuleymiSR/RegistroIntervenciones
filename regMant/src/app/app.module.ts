import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRegistroComponent } from './components/add-registro/add-registro.component';
import { MaterialModule } from './Material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModaleditComponent } from './components/modaledit/modaledit.component';
import { ModalverComponent } from './components/modalver/modalver.component';
import { TablaRegComponent } from './components/tabla-reg/tabla-reg.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddRegistroComponent,
    ModaleditComponent,
    ModalverComponent,
    TablaRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  entryComponents:[
    ModaleditComponent,
    ModalverComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
