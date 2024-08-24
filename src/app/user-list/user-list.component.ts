import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  backToRegister(): void {
    this.router.navigate(['/user-register']);
  }

  toAddBook(): void {
    this.router.navigate(['/book-add']); // Navigate to Add Book page
  }
}
