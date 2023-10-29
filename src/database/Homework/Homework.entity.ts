import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../Users/User.entity';
import { Group } from '../Group/Group.entity';
import { Teacher } from '../Teacher/Teacher.entity';
import { Lesson } from '../Lesson/Lesson.entity';
import { AttachmentsConnection } from '../Attachments/Connection/AttachConn.entity';

@Entity()
export class Homework  {
  @PrimaryGeneratedColumn()
  homeworkId: number;

  @ManyToOne(() => Group, group => group.groupId)
  @JoinColumn({ name: 'groupId' })
  groupId: number;

  @ManyToOne(() => Teacher, teacher => teacher.teacherId)
  @JoinColumn({ name: 'teacherId' })
  teacherId: number;

  @Column()
  homework: string;

  @ManyToOne(() => Lesson, lesson => lesson.lessonId)
  @JoinColumn({ name: 'lessonId' })
  lessonId: number;

  @Column({ default: new Date() })
  finishLine: Date | null;

  @Column({ default: false })
  finishByMessage: boolean;

  @OneToOne(() => AttachmentsConnection, attachConn => attachConn.attachConnId)
  @JoinColumn({ name: 'attachConnId' })
  attachments: number | null;

  @ManyToOne(() => Lesson, lesson => lesson.lessonId)
  @JoinColumn({ name: 'lessonId' })
  FinishToLesson: number | null;

}