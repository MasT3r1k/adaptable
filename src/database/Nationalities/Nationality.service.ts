import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nationalities } from './Nationality.entity';

export class NationalityService {

  constructor(
    @InjectRepository(Nationalities)
    private nationalityRepository: Repository<Nationalities>,
  ) {}
  
  

}
