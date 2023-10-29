import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonClass } from './LessonClass.entity';
import { LessonClassService } from './LessonClass.service';

@Module({
  imports: [TypeOrmModule.forFeature([LessonClass])],
  providers: [LessonClassService],
  exports: [LessonClassService]
})
export class LessonClassModule {}
