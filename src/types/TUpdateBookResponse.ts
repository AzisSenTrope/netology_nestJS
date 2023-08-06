import {HydratedDocument, QueryWithHelpers} from 'mongoose';
import {BookDocument} from '../schemas/book.schema';

export type UpdateBookResponse = QueryWithHelpers<
  HydratedDocument<BookDocument> | null,
  HydratedDocument<BookDocument>,
  unknown,
  BookDocument
>;
