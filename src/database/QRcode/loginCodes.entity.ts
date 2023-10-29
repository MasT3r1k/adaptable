import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Logincodes {
  @PrimaryGeneratedColumn()
  lcId: number;

  @Column()
  QRCode: string;

  @Column()
  socketId: string;

  @CreateDateColumn()
  created: Date;

}