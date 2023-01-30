import { Book } from '../book/book';

export interface LivroRepository {
  save(book: Book): Promise<Book>;

  findAll(): Promise<Book[]>;
}
