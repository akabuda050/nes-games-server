import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateRoomDto } from '../dto/create-room.dto';
import { UpdateRoomDto } from '../dto/update-room.dto';

@Controller('rooms')
export class RoomsController {
  @Get()
  findAll(): string {
    return 'Returns all rooms.';
  }

  @Get(':id')
  findById(@Param('id') id: string): string {
    return `Returns room with id #${id}.`;
  }

  @Post()
  create(@Body() createRoomDto: CreateRoomDto) {
    return `Creates room.`;
  }

  @Put(':id')
  update(@Param('id') id:string, @Body() updateRoomDto: UpdateRoomDto){
    return `Updates room with id #${id}.`;
  }

  @Delete(':id')
  delete(@Param('id') id:string){
    return `Deletes room with id #${id}.`;
  }
}
