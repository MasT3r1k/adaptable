import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DegreeList } from './DegreeList.entity';

export class DegreeListService {

  constructor(
    @InjectRepository(DegreeList)
    private degreeListRepository: Repository<DegreeList>,
  ) {}
  
  

}