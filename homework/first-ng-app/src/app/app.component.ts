import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";
import {UserApiService} from "./core/api/user-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-ng-app';
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      routerLink: 'admin',
      icon:'pi pi-home'
    },
    {
      label: 'plugins',
      icon: 'pi pi-fw pi-bars',
      items: [
        {
          label: '插件功能',
          routerLink:'plugins',
          icon:'pi pi-box'
        },
        {
          label: '发布留言',
          routerLink:'plugins/createDialogue',
          icon: 'pi pi-comment',
        },
        {
          label: '留言列表',
          routerLink:'plugins/dialogue',
          icon: 'pi pi-comment',
        },
      ]
    },
    {
      label: 'Users',
      routerLink: 'admin/users'
    },
    {
      label: 'Add User',
      routerLink: 'admin/user',
      queryParams:{
        'type':'new',
      }
    },
    {
      label: 'Login',
      routerLink: 'auth'
    },
    {
      label: 'Logout',
      command: () => {
        this._userApiService.logout().subscribe({
          error: () => {
            alert("Logout Sucessful");
            console.log("User Logout!!! (in pull-request branch)")
          }
        });
      }
    }
  ];

  constructor(private readonly _userApiService: UserApiService) {
  }

}
