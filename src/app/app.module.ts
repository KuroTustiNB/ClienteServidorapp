import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentsComponent } from './components/auth/login-components/login-components.component';
import { RegisterComponentComponent } from './components/auth/register-component/register-component.component';
import { HeaderComponentComponent } from './components/shared/header-component/header-component.component';
import { FooterComponentComponent } from './components/shared/footer-component/footer-component.component';
import { NavigationComponentComponent } from './components/shared/navigation-component/navigation-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentsComponent,
    RegisterComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    NavigationComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
