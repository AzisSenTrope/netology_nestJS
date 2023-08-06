import {Controller, Body, Get, Post, Param, Put, Delete} from '@nestjs/common';
import {BooksService} from './books.service';
import {BookItem} from 'src/types/bookItem';
import {QueryParams} from "../types/queryParams";
import {BookDocument} from "../schemas/book.schema";

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getBooks(): Promise<BookDocument[]> {
    return this.booksService.getBooks();
  }

  @Get(':id')
  getBook(@Param() {id}: QueryParams): Promise<BookDocument> {
    return this.booksService.getBook(id);
  }

  @Post()
  createBook(@Body() book: BookItem): Promise<BookDocument> {
    return this.booksService.createBook(book);
  }

  @Put()
  updateBook( @Param() {id}: QueryParams, @Body() book: BookItem) {
    this.booksService.updateBook(book, id);
  }

  @Delete(':id')
  public deleteBook(@Param() {id}: QueryParams) {
    return this.booksService.deleteBook(id);
  }
}