import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent {
  user: User = { id: 0, name: '', email: '' };

  constructor(private userService: UserService, private router: Router) {}

  registerUser(): void {
    this.userService.addUser(this.user).subscribe(() => {
      this.router.navigate(['/user-list']); // Redirect to User List after registration
    });
  }

  cancel(): void {
    this.router.navigate(['/user-list']); // Cancel and go to User List
  }

  goToUserList(): void {
    this.router.navigate(['/user-list']); // Navigate directly to User List
  }
}
