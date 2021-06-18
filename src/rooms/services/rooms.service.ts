import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { Room } from '@src/rooms/interfaces/room.interface';

@Injectable()
export class RoomsService {
  private rooms: Room[] = [];

  findAll(): Room[] {
    return this.rooms;
  }

  findById(id: string): Room {
    return this.rooms.find((room) => room?.id === id);
  }

  create(room: Room) {
    room.id = uuidv4();
    this.rooms.push(room);
  }

  update(id: string, updatedRoom: Room) {
    this.rooms = this.rooms.map((room) =>
      room?.id === id ? { ...room, ...updatedRoom } : room,
    );
  }

  delete(id: string) {
    this.rooms = this.rooms.filter((room) => room?.id !== id);
  }
}
