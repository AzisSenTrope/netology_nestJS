import {Injectable} from '@nestjs/common';
import {InjectModel, InjectConnection} from '@nestjs/mongoose';
import {BookItem} from 'src/types/bookItem';
import {BookDocument, Book} from "../schemas/book.schema";
import {Model, Connection} from 'mongoose';
import {UpdateBookResponse} from "../types/TUpdateBookResponse";

@Injectable()
export class BooksService {
  constructor(
      @InjectModel(Book.name) private BookModel: Model<BookDocument>,
      @InjectConnection() private connection: Connection,
  ) {}

  async createBook(book: BookItem): Promise<BookDocument> {
    const currentBook = new this.BookModel(book);
    return currentBook.save();
  }

  async updateBook(book: BookItem, id: string): Promise<UpdateBookResponse> {
    return this.BookModel.findOneAndUpdate({_id: id}, book);
  }

  async getBook(id: string): Promise<BookDocument> {
    return this.BookModel.findOne({_id: id});
  }

  async getBooks(): Promise<BookDocument[]> {
    return this.BookModel.find().exec();
  }

  async deleteBook(id: string): Promise<UpdateBookResponse> {
    return this.BookModel.findOneAndRemove({_id: id});
  }
}
