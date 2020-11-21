import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { CREDENCIALES_SERVIDOR, STORAGE } from 'src/environments/environment';
import { SocialLoginModule, SocialAuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';

export function jwtOptionsFactory(storage) {
  return {
    tokenGetter: () => {
      return storage.get(STORAGE.TOKEN.KEY);
    },
    whitelistedDomains: [`${CREDENCIALES_SERVIDOR.SERVER}:${CREDENCIALES_SERVIDOR.PUERTO}`]
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage],
      }
    }),
    SocialLoginModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('531932509606-73r5it74uk9p6h19sc2268j0bc6ro1ch.apps.googleusercontent.com')
          }
          /*
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
          */
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
