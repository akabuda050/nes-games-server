import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { handleError } from '@src/helpers/handle-errors';
import { CreateUserDto } from '@src/users/dto/create-user.dto';
import { UpdateUserDto } from '@src/users/dto/update-user.dto';
import { User } from '@src/users/interfaces/user.interface';
import { UsersService } from '@src/users/services/users.service';
const UUIDPipe = new ParseUUIDPipe({
  errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
});

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    try {
      return await this.usersService.findAll();
    } catch (e) {
      handleError(e);
    }
  }

  @Get(':id')
  async findById(
    @Param('id', UUIDPipe)
    id: string,
  ): Promise<User> {
    try {
      return await this.usersService.findById(id);
    } catch (e) {
      handleError(e);
    }
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.usersService.create(createUserDto);
    } catch (e) {
      handleError(e);
    }
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param('id', UUIDPipe)
    id: string,
    @Body() user: UpdateUserDto,
  ) {
    try {
      return await this.usersService.update(id, user);
    } catch (e) {
      handleError(e);
    }
  }

  @Delete(':id')
  async delete(
    @Param('id', UUIDPipe)
    id: string,
  ) {
    try {
      return await this.usersService.delete(id);
    } catch (e) {
      handleError(e);
    }
  }
}
