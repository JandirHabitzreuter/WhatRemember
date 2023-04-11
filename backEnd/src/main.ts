import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ExceptionsFilter } from 'exceptions/exceptions.filter';

const PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('What Remembers API')
    .setDescription('What Remembers API')
    .setVersion('0.1')
    .addBearerAuth({
      type: 'http',
      name: 'access-token',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        excludeExtraneousValues: true,
      },
    }),
  );
  app.useGlobalFilters(new ExceptionsFilter());

  app.listen(PORT).then(() => {
    console.log(`Server running on port ${PORT}`);
  });
}
bootstrap();
