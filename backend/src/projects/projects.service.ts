import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  async findAll(): Promise<Project[]> {
    return this.projectRepository.find({
      order: { created_at: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Project> {
    const project = await this.projectRepository.findOneBy({ id });
    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    return project;
  }

  async create(projectData: Partial<Project>): Promise<Project> {
    // If dates are empty strings, nullify them to avoid DB errors
    if (projectData.start_date === ('' as any)) projectData.start_date = null;
    if (projectData.end_date === ('' as any)) projectData.end_date = null;

    const newProject = this.projectRepository.create(projectData);
    return this.projectRepository.save(newProject);
  }
}
