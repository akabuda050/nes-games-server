import { IsNotEmpty } from 'class-validator';
import { Exclude } from 'class-transformer';
import { StopWords } from '../../decorators/StopWords';

export class UpdateRoomDto {
  @Exclude()
  id: string;

  @IsNotEmpty()
  @StopWords()
  name: string;
}
