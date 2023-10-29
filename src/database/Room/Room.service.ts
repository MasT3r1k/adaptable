import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from './Room.entity';

export class RoomService {

  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
  ) {}
  
  

}
