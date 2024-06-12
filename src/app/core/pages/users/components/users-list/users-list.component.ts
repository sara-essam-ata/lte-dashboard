import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Users } from '../../model/users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  usersList:Users|undefined|any;
  constructor(private UsersService: UsersService) {}
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this.UsersService.onGetAllUsers().subscribe({
      next: (res) => {
        console.log(res);
        this.usersList=res
      },
    });
  }
}
