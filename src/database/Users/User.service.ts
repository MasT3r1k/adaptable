import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './User.entity';

export class UserService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  
  findById(userId: number): Promise<User> {
    return this.usersRepository.findOne({
      relations: ['personId'],
      where: { userId: userId },
    });
  }

  findByUsername(username: string): Promise<User[]> {
    return this.usersRepository.find({
      relations: ['personId'],
      where: { username: username },
    });
  }


}
