import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Images {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_id: number;

  @Column()
  src: string;
}
