
import { Routes } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserListComponent } from './user-list/user-list.component';
import { BookListComponent } from './book-list/book-list.component';  // Correct import path
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: '/user-register', pathMatch: 'full' },  // Default route to register page
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'book-list', component: BookListComponent },  // Route for book list
  { path: 'book-add', component: BookAddComponent },    // Route for adding a new book
  { path: 'book-edit/:id', component: BookEditComponent },  // Route for editing a book
  { path: '**', redirectTo: '/user-register' },  // Fallback route for undefined paths
];
