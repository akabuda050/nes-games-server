import { IsNotEmpty } from 'class-validator';
import { Exclude } from 'class-transformer';

export class UpdateRoomDto {
  @Exclude()
  id: string;

  @IsNotEmpty()
  name: string;
}
