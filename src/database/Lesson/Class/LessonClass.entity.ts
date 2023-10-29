import { Group } from 'src/database/Group/Group.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Subject } from 'src/database/Subjects/Subject.entity';

@Entity()
export class LessonClass {
  @PrimaryGeneratedColumn()
  lessonId: number;

  @ManyToOne(() => Group, group => group.groupId)
  @JoinColumn({ name: 'groupId' })
  groupId: number;

  @ManyToOne(() => Subject, subject => subject.subjectId)
  @JoinColumn({ name: 'subjectId' })
  subjectId: number;

  @Column()
  day: number; // Number from 0 to 4; 0 - Monday; 1 - Tuesday; 2 - Wednesday; 3 - Thursday; 4 - Friday 

  @Column()
  hour: number; // Its mean like first school hour, second and so on.

  @Column({ default: 0, comment: "0 - every weeks; 1 - odd weeks; 2 - even weeks" })
  type: number;

}