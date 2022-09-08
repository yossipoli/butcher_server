import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  name: string;

  @Column()
  category_id: number;

  @Column('tinyint')
  price: number;

  @Column('int')
  stock: number;

  @Column({ length: 1000, nullable: true })
  description: string;
}
