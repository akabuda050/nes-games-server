import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RoomsModule } from '@src/rooms/rooms.module';
import { UsersModule } from '@src/users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    UsersModule,
    RoomsModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    DatabaseModule
  ],
})
export class AppModule {}
