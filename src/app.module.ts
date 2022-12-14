/* eslint-disable */
import { Customers } from './customers/customers.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { Products } from './products/products.entity';
import { ImagesModule } from './images/images.module';
import { CategoriesModule } from './categories/categories.module';
import { CartsModule } from './carts/carts.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: +process.env.PORT,
      username: process.env.DB_USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DB,
      entities: ['dist/**/*.entity{.ts,.js}'],
      // entities: [Customers, Products, Images, Categories],
      synchronize: false,
    }),
    CustomersModule,
    ProductsModule,
    ImagesModule,
    CategoriesModule,
    CartsModule,
    // OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
