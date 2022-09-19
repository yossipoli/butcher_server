/* eslint-disable */
import { Products } from './../products/products.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity()
export class Images {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_id: number;
  @ManyToOne(() => Products, (product) => product.images)
  product: Products;

  @Column()
  src: string;
}
