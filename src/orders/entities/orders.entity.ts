import { Customers } from './../../customers/customers.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customers, (customer) => customer.id)
  customer: Customers;

  @Column()
  order_date: Date;

  @Column()
  require_date: Date;

  @Column()
  shipped_date: Date;

  @Column()
  ship_city: string;

  @Column()
  ship_address: string;
}
