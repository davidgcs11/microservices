import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const serviceOptions: MicroserviceOptions = { transport: Transport.REDIS, options: { url: 'redis://redis:6379' } };
  const app = await NestFactory.createMicroservice(AppModule, serviceOptions);
  const logger = new Logger('Developer Microservice');
  await app.listen(() => logger.log('Initialized'));
}
bootstrap();
