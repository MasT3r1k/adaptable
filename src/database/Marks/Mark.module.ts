import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marks } from './Mark.entity';
import { MarkService } from './Mark.service';

@Module({
  imports: [TypeOrmModule.forFeature([Marks])],
  providers: [MarkService],
  exports: [MarkService]
})
export class MarkModule {}
