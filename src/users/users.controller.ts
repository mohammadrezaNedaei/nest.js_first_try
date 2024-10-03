import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Res,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.interface';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async getAllUsers(@Res() res: Response, @Req() req: Request) {
    if (req.headers['authorization'] !== '1234') {
      res
        .status(HttpStatus.NOT_ACCEPTABLE)
        .json({ message: 'Not accessable authorization' });
    }
    res.setHeader('done', 'yes');
    const response = await this.usersService.findAll();
    if (response)
      res.status(HttpStatus.OK).json({ message: 'success', user: response });
    else res.status(HttpStatus.NOT_FOUND).json({ message: 'not found' });
  }

  @Get('/:id')
  async getUser(
    @Param('id') id: string,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    if (req.headers['authorization'] !== '1234') {
      res
        .status(HttpStatus.NOT_ACCEPTABLE)
        .json({ message: 'Not accessable authorization' });
    }
    const response = await this.usersService.findOne(id);
    if (response)
      res.status(HttpStatus.OK).json({ message: 'success', user: response });
    else res.status(HttpStatus.NOT_FOUND).json({ message: 'not found' });
  }

  @Post()
  async createUser(
    @Body() user: Omit<User, 'id'>,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    if (req.headers['authorization'] !== '1234') {
      res
        .status(HttpStatus.NOT_ACCEPTABLE)
        .json({ message: 'Not accessable authorization' });
    }
    const response = await this.usersService.create(user);
    console.log(req.headers);
    res.status(HttpStatus.CREATED).json({ message: 'success', user: response });
  }
}
