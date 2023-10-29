import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Class } from './Class.entity';

export class ClassService {

  constructor(
    @InjectRepository(Class)
    private classRepository: Repository<Class>,
  ) {}
  
  

}
