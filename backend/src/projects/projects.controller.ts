import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ProjectsService } from './projects.service';

@Controller('api/projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(+id);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('cover_image', {
      storage: diskStorage({
        destination: './public/assets/images/projects',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  create(@Body() body: any, @UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Cover image is required');
    }

    // file.filename contains the saved file name. We store the relative path in the DB
    const coverImagePath = `assets/images/projects/${file.filename}`;

    const projectData = {
      ...body,
      cover_image: coverImagePath,
    };

    return this.projectsService.create(projectData);
  }
}
