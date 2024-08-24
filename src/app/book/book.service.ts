
  import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:8080/book';  // Backend URL

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/getAllBooks`);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  // addBook(book: Omit<Book, 'id'>): Observable<Book> {
  //   return this.http.post<Book>(`${this.apiUrl}/addBook`, book);
  // }

  addBook(book: Omit<Book, 'id'>): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}/addBook`, book);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/${id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

