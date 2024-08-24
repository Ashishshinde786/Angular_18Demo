// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { BookService } from '../book/book.service';
// import { Book } from '../models/book';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-book-add',
//   standalone: true,
//   templateUrl: './book-add.component.html',
//   styleUrls: ['./book-add.component.css'],
//   imports: [FormsModule],
// })
// export class BookAddComponent {
//   book: Omit<Book, 'id'> = { title: '', author: '' };

//   constructor(private bookService: BookService, private router: Router) {}

//   addBook(): void {
//     this.bookService.addBook(this.book).subscribe((newBook) => {
//       // Assuming newBook contains the ID of the newly created book
//       this.router.navigate(['/book-list']);
//     });
//   }

//   navigateTo(route: string): void {
//     this.router.navigate([`/${route}`]);
//   }

//   navigateToEditBook(bookId: number): void {
//     this.router.navigate([`/book-edit/${bookId}`]);
//   }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book/book.service';
import { Book } from '../models/book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-add',
  standalone: true,
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css'],
  imports: [FormsModule],
})
export class BookAddComponent {
  book: Omit<Book, 'id'> = { title: '', author: '' };

  constructor(private bookService: BookService, private router: Router) {}

  addBook(): void {
    this.bookService.addBook(this.book).subscribe(() => {
      this.router.navigate(['/book-list']);
    });
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}
