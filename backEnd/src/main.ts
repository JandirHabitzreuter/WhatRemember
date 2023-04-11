import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { routes } from './infra/routes/routes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(routes);
  await app.listen(3000);
}
bootstrap();
