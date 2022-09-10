/* eslint-disable */
import { Customers } from './customers.entity';
import { CustomersService } from './customers.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Response,
  Session,
  Req,
} from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get(':id')
  get(@Param() params) {
    return this.customersService.getCustomer(+params.id);
  }

  @Get()
  getAll() {
    return this.customersService.getCustomers();
  }

  @Post()
  login(@Session() session: Record<string, any>/*, @Req() req: Request*/) {
    return true
  }

  //   @Post()
  //   create(@Body() customer: Customer) {
  //     return this.customersService.createCustomer(customer);
  //   }

  // @Put()
  // update(@Body() customer: Customers) {
  //   return this.customersService.updateCustomer(customer);
  // }

  // @Delete(':id')
  // deleteUser(@Param() params) {
  //   return this.customersService.deleteCustomer(params.id);
  // }
}
