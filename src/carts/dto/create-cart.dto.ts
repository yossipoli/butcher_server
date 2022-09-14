import { IsEmpty, IsNumber, IsDateString } from 'class-validator';
export class CreateCartDto {
  @IsEmpty()
  @IsNumber()
  customer_id: number;

  @IsNumber()
  product_id: number;

  @IsNumber()
  amount: number;

  @IsDateString({ strict: true } as any)
  last_update: Date;
}
