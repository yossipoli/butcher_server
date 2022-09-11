import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Carts {
  @PrimaryColumn()
  customer_id: number;

  @PrimaryColumn()
  product_id: number;

  @Column()
  amount: number;

  @CreateDateColumn()
  last_update: Date;
}
