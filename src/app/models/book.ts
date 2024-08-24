// book.model.ts
export interface Book {
  id?: number;  // Mark id as optional if not always required
  title: string;
  author: string;
}
