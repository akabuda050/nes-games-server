import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { Room } from '../interfaces/room.interface';

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
      // There is possibility to update id field if this is provided in equest body. 
      // Let's re-assign it from original room to updatedRoom as well. TODO: Find another way.
      room?.id === id ? { ...room, ...{ ...updatedRoom, id: room.id } } : room,
    );
  }

  delete(id: string) {
    this.rooms = this.rooms.filter((room) => room?.id !== id);
  }
}
