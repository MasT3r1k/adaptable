import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentConnection } from './StudentConn.entity';

export class StudentConnService {

  constructor(
    @InjectRepository(StudentConnection)
    private studentConnRepository: Repository<StudentConnection>,
  ) {}
  
  

}
