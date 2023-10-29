import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttachmentsConnection } from './AttachConn.entity';
import { AttachConnService } from './AttachConn.service';

@Module({
  imports: [TypeOrmModule.forFeature([AttachmentsConnection])],
  providers: [AttachConnService],
  exports: [AttachConnService]
})
export class AttachConnModule {}
