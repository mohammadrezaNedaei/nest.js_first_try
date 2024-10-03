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
  async getAllUsers(@Res() res: Response) {
    const response = await this.usersService.findAll();
    if (response) res.status(HttpStatus.OK).json(response);
    else res.status(HttpStatus.NOT_FOUND).json(response);
  }

  @Get('/:id')
  async getUser(@Param('id') id: string, @Res() res: Response) {
    const response = await this.usersService.findOne(id);
    if (response) res.status(HttpStatus.OK).json(response);
    else res.status(HttpStatus.NOT_FOUND).json(response);
  }

  @Post()
  async createUser(@Body() user: Omit<User, 'id'>, @Res() res: Response) {
    const responce = await this.usersService.create(user);
    res.status(HttpStatus.CREATED).json(responce);
  }
}
