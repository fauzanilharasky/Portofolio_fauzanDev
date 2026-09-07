import { Repository } from 'typeorm';
import { Project } from './project.entity';
export declare class ProjectsService {
    private projectRepository;
    constructor(projectRepository: Repository<Project>);
    findAll(): Promise<Project[]>;
    findOne(id: number): Promise<Project>;
    create(projectData: Partial<Project>): Promise<Project>;
}
