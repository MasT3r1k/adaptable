import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './Person.entity';

export class PersonService {

  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}
  
  findById(personId: number): Promise<Person> {
    return this.personRepository.findOneBy({ personId: personId });
  }
  

}
