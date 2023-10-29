import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Student } from '../Student.entity';
import { Group } from 'src/database/Group/Group.entity';

@Entity()
export class StudentGroup {
  @PrimaryGeneratedColumn()
  sgId: number;

  @ManyToOne(() => Student, student => student.studentId)
  @JoinColumn({ name: 'studentId' })
  studentId: number;

  @ManyToOne(() => Group, group => group.groupId)
  @JoinColumn({ name: 'groupId' })
  groupId: number;

}