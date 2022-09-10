/* eslint-disable */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 15 })
  first_name: string;

  @Column({ length: 25 })
  last_name: string;

  @Column({ length: 20, nullable: true })
  city: string;

  @Column({ length: 45, nullable: true })
  address: string;

  @Column({ length: 15, nullable: true })
  phone: string;

  @Column({ length: 25 })
  email: string;

  @Column({ length: 300 })
  password: string;
}
