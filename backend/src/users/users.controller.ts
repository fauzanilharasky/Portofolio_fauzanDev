import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
  // UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UsersService } from './users.services';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('profile_image', {
      storage: diskStorage({
        destination: './public/assets/images/users',
      }),
    }),
  )
  async createUser() {
    // Implementation for creating a new user
  }
}
