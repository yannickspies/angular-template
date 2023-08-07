import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotificationModule } from './shared/notification/notification.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, FontAwesomeModule, NotificationModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
