import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject, SubjectPerWeek } from './Subject.entity';
import { SubjectService } from './Subject.service';

@Module({
  imports: [TypeOrmModule.forFeature([Subject]), TypeOrmModule.forFeature([SubjectPerWeek])],
  providers: [SubjectService],
  exports: [SubjectService]
})
export class SubjectModule {}
