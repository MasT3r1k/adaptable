import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Nationalities } from '../Nationalities/Nationality.entity';

@Entity()
export class Cities {
  @PrimaryGeneratedColumn()
  cityId: number;

  @Column()
  city: string;

  @ManyToOne(() => Nationalities, (nationality) => nationality.nationalityId)
  @JoinColumn({ name: 'nationalityId' })
  nationalityId: number;
}