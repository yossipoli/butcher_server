import { Products } from './../../products/products.entity';
import { Customers } from './../../customers/customers.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Carts {
  @PrimaryColumn()
  customerId: number;
  @JoinColumn()
  @ManyToOne(() => Customers, (customer) => customer.id)
  customer: Customers;

  @PrimaryColumn()
  productId: number;
  @JoinColumn()
  @ManyToOne(() => Products, (product) => product.id)
  product: Products;

  @Column()
  amount: number;

  @CreateDateColumn()
  last_update: Date;
}
