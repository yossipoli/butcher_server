/* eslint-disable */
import { Images } from './../images/images.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  name: string;

  @Column()
  category_id: number;
  // @ManyToOne(() => Categories, (categories) => categories.category_id)
  // images: Images[];

  @Column('int')
  price: number;

  @Column('int')
  stock: number;
  
  @Column({ length: 1000, nullable: true })
  description: string;
  
  // @OneToMany(() => Images, (images) => images.product_id)
  // images: Images[];
  
}
