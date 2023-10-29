import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Scopes } from './Scope.entity';

export class ScopeService {

  constructor(
    @InjectRepository(Scopes)
    private scopeRepository: Repository<Scopes>,
  ) {}
  
  getAllScopes(): Promise<Scopes[]> {
    return this.scopeRepository.find();
  }
  

}
