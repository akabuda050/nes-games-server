import { Module } from '@nestjs/common';
import { RoomsController } from '@src/rooms/controllers/rooms.controller';
import { RoomsService } from '@src/rooms/services/rooms.service';

@Module({
  controllers: [RoomsController],
  providers: [RoomsService],
})
export class RoomsModule {}
