/* eslint-disable */
import { Products } from './../products/products.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Images {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_id: number;
  // @ManyToOne(() => Products, (products) => product.image)
  // @JoinColumn({ name: 'product_id' })
  // productId: Products;

  @Column()
  src: string;
}
