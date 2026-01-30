import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../Schema/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UpdateUserService {
    constructor(private readonly userRepository: UserRepository) { }

    async execute(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
        let updateData = { ...updateUserDto };
        if (updateData.password) {
            const salt = await bcrypt.genSalt();
            updateData.password = await bcrypt.hash(updateData.password, salt);
        }
        return this.userRepository.update(id, updateData);
    }
}
