import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LessonClass } from './LessonClass.entity';

export class LessonClassService {

  constructor(
    @InjectRepository(LessonClass)
    private lessonClassRepository: Repository<LessonClass>,
  ) {}
  
  

}
