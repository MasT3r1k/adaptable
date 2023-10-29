import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarkColumns } from './MarkColumn.entity';
import { MarkColumnService } from './MarkColumn.service';

@Module({
  imports: [TypeOrmModule.forFeature([MarkColumns])],
  providers: [MarkColumnService],
  exports: [MarkColumnService]
})
export class MarkColumnModule {}
