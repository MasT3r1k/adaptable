import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Degree } from './Degree.entity';
import { DegreeService } from './Degree.service';

@Module({
  imports: [TypeOrmModule.forFeature([Degree])],
  providers: [DegreeService],
  exports: [DegreeService]
})
export class DegreeModule {}
