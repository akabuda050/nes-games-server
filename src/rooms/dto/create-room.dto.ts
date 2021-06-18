import { IsNotEmpty } from 'class-validator';
import { StopWords } from '@src/decorators/StopWords';

export class CreateRoomDto {
  @IsNotEmpty()
  @StopWords()
  name: string;
}
