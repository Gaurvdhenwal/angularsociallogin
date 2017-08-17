import { LoginsuService } from './Services/loginsu.service';
import { AuthService } from './Services/auth.service';
import { Angular2SocialLoginService } from './Services/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { Angular2SocialLoginModule } from "./social.login.module";
import { LoginComponent } from './login/login.component';
import { InitialComponent } from './login/initial/initial.component';
import { SocialsignedinComponent } from './login/socialsignedin/socialsignedin.component'
import { Routes, RouterModule } from '@angular/router'
let providers = {
  "google": {
    "clientId": "687691751177-ci9uc038n0vrleet1qreqhq2n3jcns1a.apps.googleusercontent.com"
  },
  "facebook": {
    "clientId": "1868134046772255",
    "apiVersion": "v2.8" //like v2.4 
  }
};
const appRoutes: Routes = [
  {
    path: '', component: LoginComponent, children: [
      { path: '', component: InitialComponent },
      { path: 'signed', component: SocialsignedinComponent }
    ]
  },
  { path:'home',component:HomeComponent}


]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    InitialComponent,
    SocialsignedinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [Angular2SocialLoginService, AuthService,LoginsuService],
  bootstrap: [AppComponent]
})
export class AppModule { }


//Angular2SocialLoginModule.loadProvidersScripts(providers);