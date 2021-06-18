import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  private users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  findById(id: string): User {
    return this.users.find((user) => user?.id === id);
  }

  create(user: User) {
    user.id = uuidv4();
    this.users.push(user);
  }

  update(id: string, updatedUser: User) {
    this.users = this.users.map((user) =>
      user?.id === id ? { ...user, ...updatedUser } : user,
    );
  }

  delete(id: string) {
    this.users = this.users.filter((user) => user?.id !== id);
  }
}
