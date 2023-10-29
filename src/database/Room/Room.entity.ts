import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { RoomTypes } from './Room.interface';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  roomId: number;

  @Column()
  label: string;

  @Column()
  type: RoomTypes

}