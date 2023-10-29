import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Homework } from './Homework.entity';
import { HomeworkService } from './Homework.service';

@Module({
  imports: [TypeOrmModule.forFeature([Homework])],
  providers: [HomeworkService],
  exports: [HomeworkService]
})
export class HomeworkModule {}
