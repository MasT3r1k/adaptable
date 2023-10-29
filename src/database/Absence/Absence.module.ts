import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Absence } from './Absence.entity';
import { AbsenceService } from './Absence.service';

@Module({
  imports: [TypeOrmModule.forFeature([Absence])],
  providers: [AbsenceService],
  exports: [AbsenceService]
})
export class AbsenceModule {}
