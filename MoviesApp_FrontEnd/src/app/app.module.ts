import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotfoundErrorComponent } from './components/notfound-error/notfound-error.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { FormsModule } from '@angular/forms';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { AddtofavComponent } from './components/addtofav/addtofav.component';
@NgModule({
  declarations: [
    AppComponent,
    AddtofavComponent,
    LoginComponent,
    SignupComponent,
    NotfoundErrorComponent,
    IndexComponent,
    MenuComponent,
    AdmindashboardComponent,
    UserprofileComponent,
    SearchResultComponent,
    MoviedetailsComponent,
    AddtofavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    },
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
