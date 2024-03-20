import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MSharedCompsModule } from './m-shared-comps/m-shared-comps.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LearnObservableComponent } from './learn-observable/learn-observable.component';
import { AuthTokenInterceptor } from './Interceptors/auth-token.interceptor';
import { JustAnotherInterceptor } from './Interceptors/just-another.interceptor';
import { ResponseInterceptor } from './Interceptors/response.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent,
    LoginComponent,
    LogoutComponent,
    LearnObservableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MSharedCompsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JustAnotherInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
