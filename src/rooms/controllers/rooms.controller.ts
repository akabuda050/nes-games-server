import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { handleError } from '@src/helpers/handle-errors';
import { CreateRoomDto } from '@src/rooms/dto/create-room.dto';
import { UpdateRoomDto } from '@src/rooms/dto/update-room.dto';
import { Room } from '@src/rooms/interfaces/room.interface';
import { RoomsService } from '@src/rooms/services/rooms.service';
const UUIDPipe = new ParseUUIDPipe({
  errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
});

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get()
  async findAll(): Promise<Room[]> {
    try {
      return await this.roomsService.findAll();
    } catch (e) {
      handleError(e);
    }
  }

  @Get(':id')
  async findById(
    @Param('id', UUIDPipe)
    id: string,
  ): Promise<Room> {
    try {
      return await this.roomsService.findById(id);
    } catch (e) {
      handleError(e);
    }
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createRoomDto: CreateRoomDto) {
    try {
      return await this.roomsService.create(createRoomDto);
    } catch (e) {
      handleError(e);
    }
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param('id', UUIDPipe)
    id: string,
    @Body() updateRoomDto: UpdateRoomDto,
  ) {
    try {
      return await this.roomsService.update(id, updateRoomDto);
    } catch (e) {
      handleError(e);
    }
  }

  @Delete(':id')
  async delete(
    @Param('id', UUIDPipe)
    id: string,
  ) {
    try {
      return await this.roomsService.delete(id);
    } catch (e) {
      handleError(e);
    }
  }
}
