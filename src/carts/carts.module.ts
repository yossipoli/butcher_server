import { NestModule } from '@nestjs/common/interfaces';
import { Carts } from './entities/cart.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Carts])],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {} /*need to remove this line*/
// export class CartsModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(/*the name of the middle ware*/).forRoutes({
//       path: '/customers',
//       method: RequestMethod.POST,
//     });
//   }
// }
