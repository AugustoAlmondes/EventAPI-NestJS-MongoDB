import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../Schema/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserService {
    constructor(private readonly userRepository: UserRepository) {}

    async execute(createUserDto: CreateUserDto): Promise<User> {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
        const user = {
            ...createUserDto,
            password: hashedPassword,
        };
        return this.userRepository.create(user);
    }
}
