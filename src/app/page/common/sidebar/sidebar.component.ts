import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {CookiesService} from '../../../common/services/cookies.service';
import {animate, style, transition, trigger} from '@angular/animations';

interface Workspace {
  id: string;
  name: string;
  initial: string;
  expanded: boolean;
}

interface MenuItem {
  icon: string;
  label: string;
}
@Component({
  selector: 'app-sidebar',
  imports: [
    NgForOf,
    NgIf,
  ],
  animations: [
    trigger('expandCollapse', [
      transition(':enter', [
        style({ height: '0', opacity: 0, overflow: 'hidden' }),
        animate('200ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ overflow: 'hidden' }),
        animate('200ms ease-in', style({ height: '0', opacity: 0 }))
      ])
    ])
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
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
  userEmail: string | null = "";
  menuItems: MenuItem[] = [
    { icon: 'fas fa-table-columns', label: 'boards' },
    { icon: 'fas fa-heart', label: 'highlights'},
    { icon: 'fas fa-eye', label: 'views' },
    { icon: 'fas fa-user', label: 'users' },
    { icon: 'fa fa-gear', label: 'settings' }
  ];
  constructor(private cookies: CookiesService) {}

  ngOnInit() {
    const users = JSON.parse(<string>localStorage.getItem('users'));
    const token = this.cookies.getCookie('authToken');
    this.userEmail = this.cookies.getUserFromToken(token);
    this.workspaces = users.map((user:any) => {
      return {
        id: "1",
        name: user.email,
        initial: this.getAbreviation(user.fullName),
        expanded: user.email === this.userEmail,
      }
    });

  }

  getAbreviation(fullName: string): string| undefined {
    const nameParts = fullName.trim().split(' ');
    if (nameParts.length === 0 || !fullName.trim()) {
      return undefined;
    }
    let abbreviation = '';
    abbreviation += nameParts[0][0].toUpperCase();
    for (let i = 1; i < nameParts.length; i++) {
      abbreviation += nameParts[i][0].toUpperCase();
    }
    return abbreviation;
  }

  toggleExpand(selectedWorkspace: Workspace): void {
    this.workspaces.forEach(workspace => {
      workspace.expanded = (workspace === selectedWorkspace) ? !workspace.expanded : false;
    });
    this.userEmail = selectedWorkspace.name;
  }

}
