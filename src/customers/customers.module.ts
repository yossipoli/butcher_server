import { LoginMiddleware } from './../middle_wares/login.middleware';
import { Customers } from './customers.entity';
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { MiddlewareConfigProxy, NestModule } from '@nestjs/common/interfaces';

@Module({
  imports: [TypeOrmModule.forFeature([Customers])],
  providers: [CustomersService],
  controllers: [CustomersController],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoginMiddleware).forRoutes({
      path: '/customers',
      method: RequestMethod.POST,
    });
  }
}
