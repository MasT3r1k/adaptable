import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Cities } from '../Cities/City,entity';

@Entity()
export class Addresses {
  @PrimaryGeneratedColumn()
  addressId: number;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  postcode: string

  @ManyToOne(() => Cities, (city) => city.cityId)
  @JoinColumn({ name: 'cityId' })
  city: number;

  @Column()
  partCity: string
  
}