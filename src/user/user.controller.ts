import { Body, Controller, Post, Get, Put, Delete, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserService } from './services/create-user.service';
import { FindAllUsersService } from './services/findAll-user.service';
import { FindOneUserService } from './services/findOne-user.service';
import { UpdateUserService } from './services/update-user.service';
import { DeleteUserService } from './services/delete-user.service';
import { User } from './Schema/user.schema';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(
        private readonly createUserService: CreateUserService,
        private readonly findAllUsersService: FindAllUsersService,
        private readonly findOneUserService: FindOneUserService,
        private readonly updateUserService: UpdateUserService,
        private readonly deleteUserService: DeleteUserService,
    ) { }

    @Post('create')
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return await this.createUserService.execute(createUserDto);
    }

    @Get('all')
    async findAll(): Promise<User[]> {
        return await this.findAllUsersService.execute();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User | null> {
        return await this.findOneUserService.execute(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User | null> {
        return await this.updateUserService.execute(id, updateUserDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return await this.deleteUserService.execute(id);
    }
}
