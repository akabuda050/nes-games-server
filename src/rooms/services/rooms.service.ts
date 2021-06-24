import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from '../entities/room.entity';
import { Repository } from 'typeorm';
import { CreateRoomDto } from '../dto/create-room.dto';
import { UpdateRoomDto } from '../dto/update-room.dto';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private roomsRepository: Repository<Room>,
  ) {}

  async findAll(): Promise<Room[]> {
    return await this.roomsRepository.find();
  }

  async findById(id: string): Promise<Room> {
    return await this.roomsRepository.findOneOrFail(id);
  }

  async create(room: CreateRoomDto) {
    const newRoom = await this.roomsRepository.create(room);
    await this.roomsRepository.save(newRoom);
    return newRoom;
  }

  async update(id: string, room: UpdateRoomDto) {
    await this.roomsRepository.update(id, room);
    return await this.roomsRepository.findOneOrFail(id);
  }

  async delete(id: string) {
    const deleteResponse = await this.roomsRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new NotFoundException('Room not found');
    }

    return id;
  }
}
