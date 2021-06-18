import { IsNotEmpty } from 'class-validator';
import { StopWords } from '../../decorators/StopWords';

export class CreateRoomDto {
  @IsNotEmpty()
  @StopWords()
  name: string;
}
