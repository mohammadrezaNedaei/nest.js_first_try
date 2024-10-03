import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async findAll() {
    const result = await this.userModel.find().exec();
    return result;
  }

  async findOne(id: string) {
    const result = await this.userModel.findById(id).exec();
    return result;
  }

  async create(user: Omit<User, 'id'>) {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }
}
