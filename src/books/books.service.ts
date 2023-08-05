import {Injectable} from '@nestjs/common';
import {BookItem} from 'src/types/bookItem';

@Injectable()
export class BooksService {
  private readonly books: BookItem[] = [];

  async createBook(book: BookItem): Promise<BookItem> {
    return book;
  }

  async updateBook(book: BookItem, id: string): Promise<BookItem> {
    return this.books.find((book) => book.id === id);
  }

  async getBook(id: string): Promise<BookItem> {
    return this.books.find((book) => book.id === id);
  }

  async getBooks(): Promise<BookItem[]> {
    return this.books;
  }

  async deleteBook(id: string): Promise<BookItem> {
    return this.books.find((book) => book.id === id);
  }
}
