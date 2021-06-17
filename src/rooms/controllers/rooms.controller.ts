import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateRoomDto } from '../dto/create-room.dto';
import { UpdateRoomDto } from '../dto/update-room.dto';
import { Room } from '../interfaces/room.interface';
import { RoomsService } from '../services/rooms.service';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get()
  async findAll(): Promise<Room[]> {
    return this.roomsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Room> {
    return this.roomsService.findById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createRoomDto: CreateRoomDto) {
    this.roomsService.create(createRoomDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    console.log(updateRoomDto);
    this.roomsService.update(id, updateRoomDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.roomsService.delete(id);
  }
}
