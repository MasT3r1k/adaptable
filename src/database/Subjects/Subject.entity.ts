import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { Scopes } from '../Scopes/Scope.entity';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  subjectId: number;

  @Column()
  label: string;

  @Column()
  shortcut: string;
}

@Entity()
export class SubjectPerWeek {
  @PrimaryGeneratedColumn()
  spwId: number;

  @ManyToOne(() => Scopes)
  @JoinColumn({ name: 'scope', referencedColumnName: 'scopeId' })
  scope: Scopes;

  @Column()
  grade: number;

  @ManyToOne(() => Subject)
  @JoinColumn({ name: 'subject', referencedColumnName: 'subjectId' })
  subject: Subject;

  @Column()
  hours: number;
}