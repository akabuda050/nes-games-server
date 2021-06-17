import { Module } from '@nestjs/common';
import { RoomsModule } from './rooms/modules/rooms.module';

@Module({
  imports: [RoomsModule],
})
export class AppModule {}
