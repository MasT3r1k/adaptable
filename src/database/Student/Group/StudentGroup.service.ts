import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentGroup } from './StudentGroup.entity';

export class StudentGroupService {

  constructor(
    @InjectRepository(StudentGroup)
    private studentGroupRepository: Repository<StudentGroup>,
  ) {}
  
  

}
