import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './Group.entity';

export class GroupService {

  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
  ) {}
  
  

}
