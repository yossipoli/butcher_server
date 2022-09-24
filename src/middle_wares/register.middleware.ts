import { CustomersService } from './../customers/customers.service';
import { Injectable, NestMiddleware } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
// import emailConfig from './../../mail/emailConfig.js';
import { encrypt, decrypt, hash, compare } from '../customers/secure/crypt.js';
import * as dotenv from 'dotenv';

dotenv.config();
@Injectable()
export class RegisterMiddleware implements NestMiddleware {
  constructor(private readonly customerService: CustomersService) {}
  async use(req: Record<string, any>, res: any, next: () => void) {
    const customer = await this.customerService.getCustomerByEmail(
      req.body.email,
    );
    if (customer) res.send(false);
    else {
      const transform = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: +process.env.EMAIL_PORT,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const details = {
        from: 'yossipoli@gmail.com',
        to: `${req.body.email}`,
        subject: 'Welcome to 🐮BUTCHER',
        text: `Click at the link for create a new USER`,
        html: /*html*/ `
      <html>
      <head></head>
      <body>
          <a href="http://localhost:${
            process.env.SERVER_PORT
          }/customers/email-confirm/${/*encrypt(*/ req.body.email /*)*/}"> 
            Click here to continue your registration to 🐮BUTCHER
          </a>
      </body>
      </html>
      `,
      };

      transform.sendMail(details, (err) => {
        if (err) {
          console.log('😢 Failed to send mail: ', err);
          res.send(false);
        } else {
          console.log('🚀 Email sent successfully!');
          next();
        }
      });
    }
  }
}
