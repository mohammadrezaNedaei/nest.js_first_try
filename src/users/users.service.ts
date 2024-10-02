import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [];
  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.map((user) => user.id === id);
  }

  create(user: Omit<User, 'id'>): User {
    const newUser = { id: Date.now.toString(), ...user };
    this.users.push(newUser);
    return newUser;
  }
}
