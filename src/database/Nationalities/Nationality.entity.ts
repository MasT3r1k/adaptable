import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Nationalities {
  @PrimaryGeneratedColumn()
  nationalityId: number;

  @Column()
  nationality: string;

  @Column()
  nationalityCode: string;
}