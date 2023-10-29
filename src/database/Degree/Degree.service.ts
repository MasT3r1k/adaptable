import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Degree } from './Degree.entity';

export class DegreeService {

  constructor(
    @InjectRepository(Degree)
    private degreeRepository: Repository<Degree>,
  ) {}
  
  

}