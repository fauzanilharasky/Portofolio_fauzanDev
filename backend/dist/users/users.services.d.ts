import { Repository } from 'typeorm';
import { Users } from './users.entity';
export declare class UsersService {
    private usersRepository;
    findOne(id: number): void;
    findAll(): void;
    constructor(usersRepository: Repository<Users>);
}
