import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attachments } from './Attach.entity';
import { AttachService } from './Attach.service';

@Module({
  imports: [TypeOrmModule.forFeature([Attachments])],
  providers: [AttachService],
  exports: [AttachService]
})
export class AttachModule {}
