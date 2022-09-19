import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreateCustomerDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @Length(2, 15)
  first_name: string;

  @IsNotEmpty()
  @Length(2, 25)
  last_name: string;

  @IsOptional()
  @Length(2, 20)
  city: string;

  @IsOptional()
  @Length(10)
  phone: string;

  @IsOptional()
  @Length(2, 45)
  address: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 20)
  password: string;
}
