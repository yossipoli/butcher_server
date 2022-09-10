import { CustomersService } from './../customers/customers.service';
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoginMiddleware implements NestMiddleware {
  constructor(private readonly customerService: CustomersService) {}
  async use(req: Record<string, any>, res: any, next: () => void) {
    const customer = await this.customerService.getCustomerByEmail(
      req.body.email,
    );
    if (!customer || customer.password !== req.body.password) {
      res.send(false);
    }
    res.cookie('user_id', customer.id);
    next();
  }
}
