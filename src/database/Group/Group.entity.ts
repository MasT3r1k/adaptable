import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { Class } from '../Classes/Class.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  groupId: number;

  @OneToMany(() => Class, trida => trida.classId)
  @JoinColumn({ name: 'classId' })
  classId: number;

  @Column()
  group: number;

}