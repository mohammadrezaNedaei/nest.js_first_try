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
  getAllUsers(@Res() res: Response) {
    const response = this.usersService.findAll();
    if (response)
      res.status(HttpStatus.OK).json({ message: 'success', users: response });
    else res.status(HttpStatus.NOT_FOUND).json({ message: 'no user found' });
  }

  @Get('/:id')
  getUser(@Param('id') id: string, @Res() res: Response) {
    const response = this.usersService.findOne(id);
    if (response)
      res.status(HttpStatus.OK).json({ message: 'success', user: response });
    else res.status(HttpStatus.NOT_FOUND).json({ message: 'no user found' });
  }

  @Post()
  createUser(@Body() user: Omit<User, 'id'>, @Res() res: Response) {
    const responce = this.usersService.create(user);
    res.status(HttpStatus.CREATED).json({ message: 'success', user: responce });
  }
}
