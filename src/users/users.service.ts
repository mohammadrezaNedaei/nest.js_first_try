import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [];
  findAll() {
    const result = this.users;
    return result.length ? result : null;
  }

  findOne(id: string) {
    const result = this.users.find((user) => user.id === id);
    return result;
  }

  create(user: Omit<User, 'id'>) {
    const newUser: User = { id: Date.now().toString(), ...user };
    this.users.push(newUser);
    return newUser;
  }
}
