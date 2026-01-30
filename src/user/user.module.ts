import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './Schema/user.schema';
import { UserController } from './user.controller';
import { CreateUserService } from './services/create-user.service';
import { FindAllUsersService } from './services/findAll-user.service';
import { FindOneUserService } from './services/findOne-user.service';
import { UpdateUserService } from './services/update-user.service';
import { DeleteUserService } from './services/delete-user.service';
import { UserRepository } from './repositories/user.repository';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [UserController],
    providers: [
        CreateUserService,
        FindAllUsersService,
        FindOneUserService,
        UpdateUserService,
        DeleteUserService,
        UserRepository,
    ],
    exports: [
        CreateUserService,
        FindAllUsersService,
        FindOneUserService,
        UpdateUserService,
        DeleteUserService,
        UserRepository,
    ],
})
export class UserModule {}
