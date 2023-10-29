import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AttachmentsConnection  {
  @PrimaryGeneratedColumn()
  attachConnId: number;
}