import { Products } from './../../products/products.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToMany(() => Products, (product) => product)
  product: Products[];

  @Column()
  name: string;
}
