import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nationalities } from './Nationality.entity';
import { NationalityService } from './Nationality.service';

@Module({
  imports: [TypeOrmModule.forFeature([Nationalities])],
  providers: [NationalityService],
  exports: [NationalityService]
})
export class NationalityModule {}
