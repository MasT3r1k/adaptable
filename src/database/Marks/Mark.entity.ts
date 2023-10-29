import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { MarkColumns } from './Columns/MarkColumn.entity';
import { Student } from 'src/database/Student/Student.entity';

@Entity()
export class Marks {
  @PrimaryGeneratedColumn()
  markId: number;

  @ManyToOne(() => MarkColumns, mc => mc.cmId)
  @JoinColumn({ name: 'cmId' })
  columnId: number;

  @ManyToOne(() => Student, student => student.studentId)
  @JoinColumn({ name: 'studentId' })
  studentId: number;

  @Column()
  mark: number;
}