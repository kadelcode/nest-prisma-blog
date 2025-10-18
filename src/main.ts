import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('v1/api');
  await app.listen(8000);
  console.log('Application is running on: http://localhost:8000/v1/api');
}

bootstrap();
