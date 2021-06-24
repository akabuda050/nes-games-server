import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Room as RoomInterface } from '../interfaces/room.interface';

@Entity()
@Unique(['name'])
export class Room implements RoomInterface {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public name: string;
}
