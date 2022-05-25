import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {MenubarModule} from "primeng/menubar";
import {AppRoutingModule} from "./app-routing.module";
import {AuthComponent} from "./auth/auth.component";
import {CardModule} from "primeng/card";
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PanelModule} from 'primeng/panel';
import {DialogueComponent} from "./plugins/dialogue/dialogue.component";
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CreateDialogueComponent} from "./plugins/create-dialogue/create-dialogue.component";
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from "primeng/api";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DialogueComponent,
    CreateDialogueComponent,
  ],
  imports: [
    ConfirmDialogModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    MenubarModule,
    AppRoutingModule,
    CardModule,
    MessageModule,
    MessagesModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    BrowserAnimationsModule,
    PanelModule,
    InputTextareaModule
  ],
  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
