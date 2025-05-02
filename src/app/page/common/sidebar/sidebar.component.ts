import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {SvgIconComponent} from 'angular-svg-icon';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

interface Workspace {
  id: string;
  name: string;
  initial: string;
  expanded: boolean;
}

interface MenuItem {
  icon: string;
  label: string;
  route?: string;
}
@Component({
  selector: 'app-sidebar',
  imports: [
    NgForOf,
    NgIf,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  workspaces: Workspace[] = [
    {
      id: '1',
      name: 'user1',
      initial: 'G',
      expanded: true
    },
    {
      id: '2',
      name: 'user22',
      initial: 'R',
      expanded: false
    }
  ];

  menuItems: MenuItem[] = [
    { icon: 'fas fa-table-columns', label: 'boards', route: '/boards' },
    { icon: 'fas fa-heart', label: 'highlights', route: '/highlights' },
    { icon: 'fas fa-eye', label: 'views' },
    { icon: 'fas fa-user', label: 'users', route: '/users' },
    { icon: 'fa fa-gear', label: 'settings', route: '/settings' }
  ];

  toggleExpand(workspace: Workspace): void {
    workspace.expanded = !workspace.expanded;
  }
}
