import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Name of the user',
        example: 'John Doe'
    })
    readonly name: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Email of the user',
        example: 'john.doe@example.com'
    })
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @ApiProperty({
        description: 'Password of the user',
        example: 'password123'
    })
    readonly password: string;
}
