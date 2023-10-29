import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './Group.entity';
import { GroupService } from './Group.service';

@Module({
  imports: [TypeOrmModule.forFeature([Group])],
  providers: [GroupService],
  exports: [GroupService]
})
export class GroupModule {}
