import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './Student.entity';

export class StudentService {

  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}
  
  

}
