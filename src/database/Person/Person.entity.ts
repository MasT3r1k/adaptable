import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Addresses } from '../Addresses/Address.entity';
import { Cities } from '../Cities/City,entity';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  personId: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  sex: string;

  @ManyToOne(() => Addresses, address => address.addressId)
  @JoinColumn({ name: 'address' })
  address: number;

  @Column()
  birthNumber: string;

  @ManyToOne(() => Cities, city => city.cityId)
  @JoinColumn({ name: 'placeOfBirth' })
  placeOfBirth: number;

  @Column()
  joined: Date;

}