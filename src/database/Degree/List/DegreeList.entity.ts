import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DegreeList {
  @PrimaryGeneratedColumn()
  degreeId: number;

  @Column()
  degree: string;

  @Column()
  isBeforeName: boolean;

}