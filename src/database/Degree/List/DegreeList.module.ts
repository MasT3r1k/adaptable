import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DegreeList } from './DegreeList.entity';
import { DegreeListService } from './DegreeList.service';

@Module({
  imports: [TypeOrmModule.forFeature([DegreeList])],
  providers: [DegreeListService],
  exports: [DegreeListService]
})
export class DegreeListModule {}
