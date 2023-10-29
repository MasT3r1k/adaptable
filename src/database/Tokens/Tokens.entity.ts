import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, JoinColumn } from 'typeorm';
import { User } from '../Users/User.entity';

@Entity()
export class Tokens {
  @PrimaryGeneratedColumn()
  tokenId: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId', referencedColumnName: 'userId' })
  userId: User;

  @Column()
  token: string;

  @Column()
  userAgent: string;

  @Column()
  expires: Date;

  @CreateDateColumn()
  created: Date;

}