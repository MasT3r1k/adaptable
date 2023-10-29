import { Group } from 'src/database/Group/Group.entity';
import { Subject } from 'src/database/Subjects/Subject.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Teacher } from '../Teacher.entity';

@Entity()
export class TeacherSubject {
  @PrimaryGeneratedColumn()
  tsId: number;

  @ManyToOne(() => Group)
  @JoinColumn({ name: 'groupId' })
  groupId: number;

  @ManyToOne(() => Subject)
  @JoinColumn({ name: 'subjectId' })
  subjectId: number;

  @ManyToOne(() => Teacher)
  @JoinColumn({ name: 'teacherId' })
  teacherId: number;

}