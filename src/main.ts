import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 3000;
  const date = new Date();
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`listning on https://localhost:${port}`);
  console.log(date.toLocaleString());
}
bootstrap();
