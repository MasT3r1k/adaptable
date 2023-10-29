import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './Teacher.entity';
import { TeacherService } from './Teacher.service';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher])],
  providers: [TeacherService],
  exports: [TeacherService]
})
export class TeacherModule {}
