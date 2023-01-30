import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Autor } from 'src/entities/autor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(Autor)
    private appRepository: Repository<Autor>,
  ) {}

  async create(autorDTO: Autor): Promise<Autor> {
    return this.appRepository.save(autorDTO);
  }

  async findAll(): Promise<Autor[]> {
    return this.appRepository.find();
  }
}
