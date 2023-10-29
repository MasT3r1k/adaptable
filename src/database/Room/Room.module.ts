import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './Room.entity';
import { RoomService } from './Room.service';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  providers: [RoomService],
  exports: [RoomService]
})
export class RoomModule {}
