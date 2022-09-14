import { Carts } from './../carts/entities/cart.entity';
import { Orders } from './../orders/entities/orders.entity';
/* eslint-disable */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';

@Entity()
export class Customers {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToMany(() => Orders, (order) => order.customer)
  orders: Orders[];
  @OneToMany(() => Carts, (cart) => cart.customer)
  carts: Carts[];

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
