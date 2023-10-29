import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './Student.entity';
import { StudentService } from './Student.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentService],
  exports: [StudentService]
})
export class StudentModule {}
