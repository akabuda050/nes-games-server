import { Exclude } from 'class-transformer';
import { IsAlphanumeric, IsEmail } from 'class-validator';
import { StopWords } from 'src/decorators/StopWords';

export class CreateUserDto {
  @IsAlphanumeric()
  @StopWords()
  name: string;

  @IsEmail()
  email: string;
}
