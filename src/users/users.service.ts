import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  findAll() {
    const result = this.userModel.find().exec();
    return result;
  }

  findOne(id: string) {
    const result = this.userModel.findById(id).exec();
    return result;
  }

  create(user: Omit<User, 'id'>) {
    const newUser = new this.userModel({ id: Date.now().toString(), ...user });
    return newUser.save();
  }
}
