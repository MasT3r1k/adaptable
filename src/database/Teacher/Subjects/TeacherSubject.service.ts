import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeacherSubject } from './TeacherSubject.entity';

export class TeacherSubjectService {

  constructor(
    @InjectRepository(TeacherSubject)
    private teacherSubjectRepository: Repository<TeacherSubject>,
  ) {}
  
  

}
