import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mohammadrezanedaeei:mmd1234@myfirstdb.gsevi.mongodb.net/?retryWrites=true&w=majority&appName=myFirstDb',
    ),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
