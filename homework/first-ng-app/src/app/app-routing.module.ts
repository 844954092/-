import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth/auth.component";
import {DialogueComponent} from "./plugins/dialogue/dialogue.component";
import {PluginsComponent} from "./plugins/plugins.component";
import {CreateDialogueComponent} from "./plugins/create-dialogue/create-dialogue.component";

const adminModule = () =>
  import('./admin/admin.module').then(module => module.AdminModule);
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: adminModule
  }, {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'plugins',
    children: [
      {
        path: '',
        component: PluginsComponent
      },
      {
        path: 'createDialogue',
        component: CreateDialogueComponent
      },
      {
        path: 'dialogue',
        component: DialogueComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
