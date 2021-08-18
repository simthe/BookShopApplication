import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { SellComponent } from './sell/sell.component';
import { RegisterComponent } from './register/register.component';
import { BookService, UserBookService, UserService } from './core/services/api.client.generated';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    SellComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'sell', component: SellComponent },
      { path: 'register', component: RegisterComponent },
    ])
  ],
  providers: [UserService, BookService, UserBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
