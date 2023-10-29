import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Marks } from './Mark.entity';

export class MarkService {

  constructor(
    @InjectRepository(Marks)
    private markRepository: Repository<Marks>,
  ) {}
  
  

}