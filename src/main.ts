/* eslint-disable */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ credentials: true, origin: 'http://localhost:3000' });
  app.use(cookieParser())
  app.use(
    session({
      name: 'user',
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false,
    }),
  );
  await app.listen(+process.env.SERVER_PORT);
}
bootstrap();
