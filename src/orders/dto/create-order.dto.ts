import {
  IsNotEmpty,
  IsNumber,
  IsDateString,
  IsOptional,
} from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsNumber()
  customerId: number;

  @IsNotEmpty()
  @IsDateString({ strict: true } as any)
  order_date: Date;

  @IsDateString({ strict: true } as any)
  require_date: Date;

  @IsDateString({ strict: true } as any)
  shipped_date: Date;

  @IsOptional()
  ship_city: string;

  @IsOptional()
  ship_address: string;
}
