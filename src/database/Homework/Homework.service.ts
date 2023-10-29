import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Homework } from './Homework.entity';

export class HomeworkService {

  constructor(
    @InjectRepository(Homework)
    private homeworkRepository: Repository<Homework>,
  ) {}
  
  

}