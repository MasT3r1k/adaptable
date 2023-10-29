import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherSubject } from './TeacherSubject.entity';
import { TeacherSubjectService } from './TeacherSubject.service';

@Module({
  imports: [TypeOrmModule.forFeature([TeacherSubject])],
  providers: [TeacherSubjectService],
  exports: [TeacherSubjectService]
})
export class TeacherSubjectModule {}
