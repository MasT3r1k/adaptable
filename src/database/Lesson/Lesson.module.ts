import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './Lesson.entity';
import { LessonService } from './Lesson.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson])],
  providers: [LessonService],
  exports: [LessonService]
})
export class LessonModule {}
