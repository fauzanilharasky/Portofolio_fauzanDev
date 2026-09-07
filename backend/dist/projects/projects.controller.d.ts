import { ProjectsService } from './projects.service';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    findAll(): Promise<import("./project.entity").Project[]>;
    findOne(id: string): Promise<import("./project.entity").Project>;
    create(body: any, file: Express.Multer.File): Promise<import("./project.entity").Project>;
}
