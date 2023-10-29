import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Room } from '../Room/Room.entity';
import { Teacher } from '../Teacher/Teacher.entity';
import { Scopes } from '../Scopes/Scope.entity';

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  classId: number;

  @Column()
  label: string;

  @OneToOne(() => Room, room => room.roomId)
  @JoinColumn({ name: 'roomId' })
  room: number;

  @OneToOne(() => Teacher, teacher => teacher.teacherId)
  @JoinColumn({ name: 'teacherId' })
  teacher: number;

  @OneToMany(() => Scopes, scope => scope.scopeId)
  @JoinColumn({ name: 'scopeId' })
  scopeId: number;

}