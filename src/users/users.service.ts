import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [];
  findAll() {
    const result = this.users;
    return result
      ? { message: 'success', users: result }
      : { message: 'no users' };
  }

  findOne(id: string) {
    const result = this.users.find((user) => user.id === id);
    return result
      ? { message: 'success', user: result }
      : { message: 'no user found' };
  }

  create(user: Omit<User, 'id'>) {
    const newUser: User = { id: Date.now.toString(), ...user };
    this.users.push(newUser);
    return { message: 'user created', user: newUser };
  }
}
