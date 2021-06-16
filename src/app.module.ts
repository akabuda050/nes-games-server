import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsController } from './rooms/controllers/rooms.controller';

@Module({
  imports: [],
  controllers: [AppController, RoomsController],
  providers: [AppService],
})
export class AppModule {}
