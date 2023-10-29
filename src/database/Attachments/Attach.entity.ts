import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AttachmentsConnection } from './Connection/AttachConn.entity';
import { User } from '../Users/User.entity';

@Entity()
export class Attachments  {
  @PrimaryGeneratedColumn()
  attachmentId: number;

  @ManyToOne(() => AttachmentsConnection, attachconn => attachconn.attachConnId)
  @JoinColumn({ name: 'attachConnId' })
  attachConnId: number;

  @ManyToOne(() => User, user => user.userId)
  @JoinColumn({ name: 'userId' })
  author: number;

  @Column()
  name: string;

  @Column()
  extension: string;

  @Column()
  size: number;

  @Column()
  url: string;

}