import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AttachmentsConnection } from './AttachConn.entity';

export class AttachConnService {

  constructor(
    @InjectRepository(AttachmentsConnection)
    private attachConnRepository: Repository<AttachmentsConnection>,
  ) {}
  
  

}