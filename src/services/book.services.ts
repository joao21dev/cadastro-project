import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private appRepository: Repository<Book>,
  ) {}

  create(bookDTO: Book): Promise<Book> {
    return this.appRepository.save(bookDTO);
  }

  findAll(): Promise<Book[]> {
    return this.appRepository.find();
  }
}
