import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HighlightTextDirective } from './directives/highlightText.directive';
import { RendererHighlightDirective } from './directives/renderer-highlight.directive';
import { AlternateIfDirective } from './directives/alternateIf.directive';
import { UserService } from './services/user.service';
import { LoggingService } from './services/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    HighlightTextDirective,
    RendererHighlightDirective,
    AlternateIfDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    UserService,
    LoggingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
