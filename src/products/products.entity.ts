import { Categories } from './../categories/entities/category.entity';
/* eslint-disable */
import { Images } from './../images/images.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  name: string;

  @Column()
  categoryId: number;
  @JoinColumn()
  @ManyToOne(() => Categories, (categories) => categories.id)
  category: Categories[];

  @Column('int')
  price: number;

  @Column('int')
  stock: number;

  @Column({ length: 1000, nullable: true })
  description: string;

  @OneToMany(() => Images, (images) => images.product_id)
  images: Images[];
}
