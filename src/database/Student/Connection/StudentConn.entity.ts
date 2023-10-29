import { Person } from 'src/database/Person/Person.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Student } from '../Student.entity';
import { StudentConnTypes } from './StudentConn.interface';

@Entity()
export class StudentConnection {
  @PrimaryGeneratedColumn()
  connId: number;

  @ManyToOne(() => Person)
  @JoinColumn({ name: 'personId' })
  personId: number;

  @ManyToOne(() => Student)
  @JoinColumn({ name: 'studentId' })
  studentId: number;

  @Column()
  type: StudentConnTypes;

}