import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersDataService } from '../../data/users-data.service';
import { User } from '../../models/user.model';
import { NbMenuItem, NbMenuService } from '@nebular/theme';

@Component({
  selector: 'app-sidebarLeft',
  templateUrl: './sidebarLeft.component.html',
  styleUrls: ['./sidebarLeft.component.css']
})
export class SidebarLeftComponent implements OnInit {
  @Output() selectedUserEmitter = new EventEmitter<User | null>();
  public _selectedUser: User | null = null
  get selectedUser(): User | null {
    return this._selectedUser;
  }
  set selectedUser(value: User | null) {
    this._selectedUser = value;
    this.selectedUserEmitter.emit(value)
  }

  items: NbMenuItem[] = [
    { title: 'Add user', data: 'AddUser' },
    { title: 'Remove all users', data: 'RemoveUsers' },
    { title: 'Reset basic users', data: 'ResetBasicUsers' },
  ];
  constructor(
    public usersDataService: UsersDataService,
    private menuService: NbMenuService
  ) { }

  ngOnInit() {
    this.usersDataService.generateRandomUsers();
    this.menuService.onItemClick().subscribe((event) => {
      console.log(event)
    })
  }

}
