import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attachments } from './Attach.entity';

export class AttachService {

  constructor(
    @InjectRepository(Attachments)
    private attachRepository: Repository<Attachments>,
  ) {}
  
  

}