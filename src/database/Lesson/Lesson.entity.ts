import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Group } from '../Group/Group.entity';
import { Subject } from '../Subjects/Subject.entity';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  lessonId: number;

  @ManyToOne(() => Group, group => group.groupId)
  @JoinColumn({ name: 'groupId' })
  groupId: number;

  @ManyToOne(() => Subject, subject => subject.subjectId)
  @JoinColumn({ name: 'subjectId' })
  subjectId: number;

  @Column()
  topic: string;

  @Column()
  note: string;

}