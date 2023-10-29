import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentGroup } from './StudentGroup.entity';
import { StudentGroupService } from './StudentGroup.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudentGroup])],
  providers: [StudentGroupService],
  exports: [StudentGroupService]
})
export class StudentGroupModule {}
