import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cities } from './City,entity';

export class CityService {

  constructor(
    @InjectRepository(Cities)
    private cityRepository: Repository<Cities>,
  ) {}
  
  

}
