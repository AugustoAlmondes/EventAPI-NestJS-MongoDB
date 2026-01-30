import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../Schema/user.schema';

@Injectable()
export class FindAllUsersService {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(): Promise<User[]> {
        return this.userRepository.findAll();
    }
}
