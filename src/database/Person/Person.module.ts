import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './Person.entity';
import { PersonService } from './Person.service';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  providers: [PersonService],
  exports: [PersonService]
})
export class PersonModule {}
