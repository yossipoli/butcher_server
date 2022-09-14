import { CustomersModule } from './../customers/customers.module';
import { Orders } from './entities/orders.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Orders]), CustomersModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
