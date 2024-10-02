import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.interface';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Get('/:id')
  getUser(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post()
  createUser(@Body() user: Omit<User, 'id'>, @Res() res: Response) {
    const responce = this.usersService.create(user);
    res.status(HttpStatus.CREATED).json(responce);
  }
}
