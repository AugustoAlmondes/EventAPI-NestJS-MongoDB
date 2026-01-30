import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../Schema/user.schema';

@Injectable()
export class FindOneUserService {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(id: string): Promise<User | null> {
        return this.userRepository.findOne(id);
    }
}
