import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Addresses } from './Address.entity';

export class AddressService {

  constructor(
    @InjectRepository(Addresses)
    private addressRepository: Repository<Addresses>,
  ) {}
  
  

}
