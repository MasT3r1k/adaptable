import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Student } from '../Student/Student.entity';
import { Lesson } from '../Lesson/Lesson.entity';
import { Teacher } from '../Teacher/Teacher.entity';
import { AbsenceReason } from './Absence.interface';

@Entity()
export class Absence {
  @PrimaryGeneratedColumn()
  absenceId: number;

  @ManyToOne(() => Student, student => student.studentId)
  @JoinColumn({ name: 'studentId' })
  studentId: number;

  @ManyToOne(() => Lesson, lesson => lesson.lessonId)
  @JoinColumn({ name: 'lessonId' })
  lessonId: number;

  @ManyToOne(() => Teacher, teacher => teacher.teacherId)
  @JoinColumn({ name: 'teacherId' })
  excused: number | null;

  @Column()
  reason: AbsenceReason | null;
  
}