import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { AuthModule } from '@auth0/auth0-angular'
import { AuthButtonComponent } from './auth-button/auth-button.component'
import { UserProfileComponent } from './user-profile/user-profile.component'
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { PlantGrowthServiceComponent } from './plant-growth-service/plant-growth-service.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { PlantCardComponent } from './plant-card/plant-card.component'

@NgModule({

  declarations: [
    AppComponent,
    AuthButtonComponent,
    UserProfileComponent,
    NavBarComponent,
    PlantGrowthServiceComponent,
    PlantCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'devg94.us.auth0.com',
      clientId: 'aoRSFsGepxr4eumG0SJvZR35W5LgPUoJ'
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
