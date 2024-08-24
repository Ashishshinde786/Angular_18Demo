// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { BookService } from '../book/book.service';
// import { Book } from '../models/book';
// import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-book-list',
//   standalone: true,
//   templateUrl: './book-list.component.html',
//   styleUrls: ['./book-list.component.css'],
//   imports: [RouterModule, CommonModule]
// })
// export class BookListComponent implements OnInit {
//   books: Book[] = [];

//   constructor(private bookService: BookService, private router: Router) {}

//   ngOnInit(): void {
//     this.bookService.getAllBooks().subscribe((data) => {
//       this.books = data;
//     });
//   }

//   deleteBook(book: Book): void {
//     if (book.id) {
//       this.bookService.deleteBook(book.id).subscribe(() => {
//         this.books = this.books.filter(b => b.id !== book.id);
//       });
//     }
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { BookService } from '../book/book.service';
// import { Book } from '../models/book';
// import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-book-list',
//   standalone: true,
//   templateUrl: './book-list.component.html',
//   styleUrls: ['./book-list.component.css'],
//   imports: [RouterModule, CommonModule]
// })
// export class BookListComponent implements OnInit {
//   books: Book[] = [];

//   constructor(private bookService: BookService, private router: Router) {}

//   ngOnInit(): void {
//     this.bookService.getAllBooks().subscribe((data) => {
//       this.books = data;
//     });
//   }

//   deleteBook(book: Book): void {
//     if (book.id) {
//       this.bookService.deleteBook(book.id).subscribe(() => {
//         this.books = this.books.filter(b => b.id !== book.id);
//       });
//     }
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { BookService } from '../book/book.service';
// import { Book } from '../models/book';
// import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-book-list',
//   standalone: true,
//   templateUrl: './book-list.component.html',
//   styleUrls: ['./book-list.component.css'],
//   imports: [RouterModule, CommonModule]
// })
// export class BookListComponent implements OnInit {
//   books: Book[] = [];

//   constructor(private bookService: BookService, private router: Router) {}

//   ngOnInit(): void {
//     this.bookService.getAllBooks().subscribe((data) => {
//       this.books = data;
//     });
//   }

//   deleteBook(book: Book): void {
//     if (book.id) {
//       this.bookService.deleteBook(book.id).subscribe(() => {
//         this.books = this.books.filter(b => b.id !== book.id);
//       });
//     }
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { BookService } from '../book/book.service';
// import { Book } from '../models/book';
// import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-book-list',
//   standalone: true,
//   templateUrl: './book-list.component.html',
//   styleUrls: ['./book-list.component.css'],
//   imports: [RouterModule, CommonModule]
// })
// export class BookListComponent implements OnInit {
//   books: Book[] = [];

//   constructor(private bookService: BookService, private router: Router) {}

//   ngOnInit(): void {
//     // Fetch the list of books when the component initializes
//     this.bookService.getAllBooks().subscribe((data) => {
//       this.books = data; // Assign the fetched data to the books array
//     });
//   }

//   deleteBook(book: Book): void {
//     if (book.id) {
//       this.bookService.deleteBook(book.id).subscribe(() => {
//         // Filter out the deleted book from the books array
//         this.books = this.books.filter(b => b.id !== book.id);
//       });
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book/book.service';
import { Book } from '../models/book';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  imports: [RouterModule, CommonModule]
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookService.getAllBooks().subscribe((data) => {
      this.books = data;
    });
  }

  deleteBook(book: Book): void {
    if (book.id) {
      this.bookService.deleteBook(book.id).subscribe(() => {
        this.books = this.books.filter(b => b.id !== book.id);
      });
    }
  }
}


