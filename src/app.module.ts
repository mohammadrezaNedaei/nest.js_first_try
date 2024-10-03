import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://mohammadrezanedaeei:mmd1234@myfirstdb.gsevi.mongodb.net/?retryWrites=true&w=majority&appName=myFirstDb',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
