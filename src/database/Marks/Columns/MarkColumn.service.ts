import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MarkColumns } from './MarkColumn.entity';

export class MarkColumnService {

  constructor(
    @InjectRepository(MarkColumns)
    private mcRepository: Repository<MarkColumns>,
  ) {}
  
  

}