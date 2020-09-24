import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlantGrowthServiceComponent } from './plant-growth-service/plant-growth-service.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent,
    UserProfileComponent,
    NavBarComponent,
    PlantGrowthServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'devg94.us.auth0.com',
      clientId: 'aoRSFsGepxr4eumG0SJvZR35W5LgPUoJ'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
