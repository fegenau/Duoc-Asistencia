import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire/compat';
import { FirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,

    // Inicializa AngularFireModule con la configuración de Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),

    FirestoreModule, // Para Firestore (base de datos)
    AngularFireAuthModule, // Para Firebase Authentication
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
