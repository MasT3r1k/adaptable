import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Absence } from './Absence.entity';

export class AbsenceService {

  constructor(
    @InjectRepository(Absence)
    private absenceRepository: Repository<Absence>,
  ) {}
  
  

}