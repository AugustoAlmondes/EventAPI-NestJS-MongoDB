import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class DeleteUserService {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(id: string): Promise<void> {
        return this.userRepository.remove(id);
    }
}
