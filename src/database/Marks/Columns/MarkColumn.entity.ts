import { Group } from 'src/database/Group/Group.entity';
import { Subject } from 'src/database/Subjects/Subject.entity';
import { Teacher } from 'src/database/Teacher/Teacher.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class MarkColumns {
  @PrimaryGeneratedColumn()
  cmId: number;

  @ManyToOne(() => Subject, subject => subject.subjectId)
  @JoinColumn({ name: 'subjectId' })
  subjectId: number;

  @ManyToOne(() => Teacher, teacher => teacher.teacherId)
  @JoinColumn({ name: 'teacherId' })
  teacherId: number;

  @ManyToOne(() => Group, group => group.groupId)
  @JoinColumn({ name: 'groupId' })
  groupId: number;

  @Column()
  caption: string;

  /*
    Type - values: 0 = weight, 1 = max points
  */

  @Column()
  type: number;

  @Column()
  points: number;

  @Column({ default: new Date() })
  created: Date;

}