import { Module } from '@nestjs/common';
import { RoomsModule } from './rooms/rooms.module';
import { UsersModule } from './user/users.module';

@Module({
  imports: [UsersModule, RoomsModule],
})
export class AppModule {}
