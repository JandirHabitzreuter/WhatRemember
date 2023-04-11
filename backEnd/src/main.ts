import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({
    transformOptions: {
      excludeExtraneousValues: true,
    }
  }));

  app.listen(PORT).then(() => {
    console.log(`Server running on port ${PORT}`)
  });
}
bootstrap();
