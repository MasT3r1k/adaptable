import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject, SubjectPerWeek } from './Subject.entity';

export class SubjectService {

  constructor(
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
    @InjectRepository(SubjectPerWeek)
    private spwRepository: Repository<SubjectPerWeek>,
  ) {}
  
  createSubject(subject: string, shortname: string): void {
    this.subjectRepository.insert({ label: subject, shortcut: shortname });
  }

  

}
