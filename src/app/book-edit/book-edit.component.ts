// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { BookService } from '../book/book.service';
// import { Book } from '../models/book';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-book-edit',
//   standalone: true,
//   templateUrl: './book-edit.component.html',
//   styleUrls: ['./book-edit.component.css'],
//   imports: [FormsModule],
// })
// export class BookEditComponent implements OnInit {
//   book: Book = { id: 0, title: '', author: '' };
//   id: number = 0;

//   constructor(
//     private bookService: BookService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     const idParam = this.route.snapshot.paramMap.get('id');
//     if (idParam) {
//       this.id = Number(idParam);
//       if (this.id) {
//         this.bookService.getBookById(this.id).subscribe((data) => {
//           this.book = data;
//         });
//       }
//     }
//   }

//   updateBook(): void {
//     if (this.id) {
//       this.bookService.updateBook(this.id, this.book).subscribe(() => {
//         this.router.navigate(['/book-list']);
//       });
//     }
//   }

//   navigateTo(route: string): void {
//     this.router.navigate([`/${route}`]);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book/book.service';
import { Book } from '../models/book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  imports: [FormsModule],
})
export class BookEditComponent implements OnInit {
  book: Book = { id: 0, title: '', author: '' };
  id: number = 0;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = Number(idParam);
      this.fetchBook();
    }
  }

  fetchBook(): void {
    this.bookService.getBookById(this.id).subscribe((data) => {
      this.book = data;
    });
  }

  updateBook(): void {
    if (this.id) {
      this.bookService.updateBook(this.id, this.book).subscribe(() => {
        this.router.navigate(['/book-list']);
      });
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}
