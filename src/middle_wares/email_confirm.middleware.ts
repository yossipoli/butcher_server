// import { CustomersService } from './../customers/customers.service';
// import { Injectable, NestMiddleware } from '@nestjs/common';
// import nodemailer from 'nodemailer';
// import emailConfig from './../../mail/emailConfig.js';
// import { encrypt, decrypt, hash, compare } from '../../secure/crypt.js';

// @Injectable()
// export class EmailConfirmMiddleware implements NestMiddleware {
//   constructor(private readonly customerService: CustomersService) {}
//   async use(req: Record<string, any>, res: any, next: () => void) {
//     const customer = await this.customerService.getCustomerByEmail(
//       req.body.email,
//     );
//     if (customer) res.send(false);
//     else {
//       const transform = nodemailer.createTransport(emailConfig);
//       const details = {
//         from: 'yossipoli@gmail.com',
//         to: `${req.body.email}`,
//         subject: 'Welcome to 🐮BUTCHER',
//         text: `Click at the link for create a new USER`,
//         html: /*html*/ `
//       <html>
//       <head></head>
//       <body>
//           <a href="http://localhost:${process.env.SERVER_PORT}/${req.body.email}"> Click here to continue your registration to 🐮Butcher !</a>
//       </body>
//       </html>
//       `,
//       };

//       transform.sendMail(details, (err) => {
//         if (err) {
//           console.log('😢 Failed to send mail: ', err);
//           res.send(false);
//         } else {
//           console.log('🚀 Email sent successfully!');
//           next();
//         }
//       });
//     }
//   }
// }
