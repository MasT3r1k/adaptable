import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Scopes {
  @PrimaryGeneratedColumn()
  scopeId: number;

  @Column()
  label: string;

  @Column()
  code: string;

  @Column()
  years: number;

}