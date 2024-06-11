import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../service/shared.service';

interface IMenu {
  title: string;
  icon: string;
  link: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

  constructor(
    private Router: Router,
    private _SharedService:SharedService
  ) {
    
  }
    isOpen: boolean = this._SharedService.isOpen;

  menu: IMenu[] = [
    {
      title: 'Dashboard',
      icon: 'fa-solid  fa-house',
      link: '/dashboard/home',
    },
    {
      title: 'Projects',
      icon: 'fa-solid fa-list-check',
      link: '/dashboard/projects',
    },
    {
      title: 'Users',
      icon: 'fa-solid fa-users',
      link: '/dashboard/users',
    },
  ];

}