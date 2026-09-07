import { UsersService } from './users.services';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): void;
    findOne(id: string): void;
    createUser(): Promise<void>;
}
