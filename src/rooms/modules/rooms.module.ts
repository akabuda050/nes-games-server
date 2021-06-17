import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { RoomsController } from '../controllers/rooms.controller';
import { StopWordsNameMiddleware } from '../middlewares/stop-words-name.middleware';
import { RoomsService } from '../services/rooms.service';

@Module({
  controllers: [RoomsController],
  providers: [RoomsService],
})
export class RoomsModule implements NestModule {
  async configure(consumer: MiddlewareConsumer) {
    return await consumer.apply(StopWordsNameMiddleware).forRoutes(
      { path: 'rooms', method: RequestMethod.POST },
      {
        path: 'rooms/:id',
        method: RequestMethod.PUT,
      },
    );
  }
}
