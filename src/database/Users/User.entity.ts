import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UserTypes } from './User.interface';
import { Person } from '../Person/Person.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @ManyToOne(() => Person)
  @JoinColumn({ name: 'personId', referencedColumnName: 'personId' })
  personId: Person;

  @Column({ length: 32 })
  username: string;

  @Column()
  password: string;

  @Column()
  type: UserTypes;

  @Column()
  locale: string;

}