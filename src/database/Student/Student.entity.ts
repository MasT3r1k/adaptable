import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Person } from '../Person/Person.entity';
import { Class } from '../Classes/Class.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  studentId: number;

  @OneToOne(() => Person)
  @JoinColumn({ name: 'personId' })
  personId: number;

  @OneToMany(() => Class, trida => trida.classId)
  @JoinColumn({ name: 'classId' })
  class: number;

  @Column({ default: false })
  onService: boolean;

}