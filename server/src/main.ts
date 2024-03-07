import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { JoiValidationPipe } from './pipes/joi-validation.pipe';
import * as Joi from '@hapi/joi';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('LeadsBuffet')
    .setDescription('LeadsBuffet API description')
    .setVersion('1.0')
    .addTag('default')
    .setBasePath('api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // Use the validation pipe globally
  app.useGlobalPipes(new JoiValidationPipe(Joi.object()));

  await app.listen(3000);
}
bootstrap();
