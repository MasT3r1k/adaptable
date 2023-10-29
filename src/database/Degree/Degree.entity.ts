import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Person } from '../Person/Person.entity';
import { DegreeList } from './List/DegreeList.entity';

@Entity()
export class Degree {
  @PrimaryGeneratedColumn()
  degreeId: number;

  @ManyToOne(() => Person, person => person.personId)
  @JoinColumn({ name: 'personId' })
  personId: number;

  @ManyToOne(() => DegreeList, degree => degree.degreeId)
  @JoinColumn({ name: 'degreeId' })
  degree: number;

}