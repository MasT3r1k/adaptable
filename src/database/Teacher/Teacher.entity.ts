import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Person } from '../Person/Person.entity';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  teacherId: number;

  @OneToOne(() => Person)
  @JoinColumn({ name: 'personId' })
  personId: number;

}