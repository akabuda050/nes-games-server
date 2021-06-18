import { Module } from '@nestjs/common';
import { RoomsModule } from '@src/rooms/rooms.module';
import { UsersModule } from '@src/users/users.module';

@Module({
  imports: [UsersModule, RoomsModule],
})
export class AppModule {}
