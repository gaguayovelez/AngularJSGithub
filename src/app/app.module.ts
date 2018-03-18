import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';
import { UserCardComponent } from './user-card/user-card.component';
import { ReposComponent } from './repos/repos.component';
import { AppRoutingModule } from './app.routing.module';
import { RepoCardComponent } from './repo-card/repo-card.component';
import { ReposService } from './repos/repos.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserCardComponent,
    ReposComponent,
    RepoCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    UsersService,
    ReposService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
