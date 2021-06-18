import { Exclude } from 'class-transformer';
import { IsAlphanumeric, IsEmail } from 'class-validator';
import { StopWords } from '@src/decorators/StopWords';

export class UpdateUserDto {
  @Exclude()
  id: string;

  @IsAlphanumeric()
  @StopWords()
  name: string;

  @IsEmail()
  email: string;
}
