import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
users: any[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  editUser(user: any) {
    this.router.navigate(['/users/edit', user.id]);
  }

  deleteUser(id?: number) {
    if (id && confirm('Are you sure to delete?')) {
      this.userService.deleteUser(id).subscribe(() => this.loadUsers());
    }
  }
}
