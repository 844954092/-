import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginsComponent } from './plugins.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { CreateDialogueComponent } from './create-dialogue/create-dialogue.component';


@NgModule({
  declarations: [
    PluginsComponent,
    DialogueComponent,
    CreateDialogueComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class PluginsModule { }
