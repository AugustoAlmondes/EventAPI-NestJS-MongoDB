import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength, IsOptional } from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    @ApiProperty({
        description: 'Name of the user',
        example: 'John Doe'
    })
    readonly name?: string;

    @IsOptional()
    @IsEmail()
    @ApiProperty({
        description: 'Email of the user',
        example: 'john.doe@example.com'
    })
    readonly email?: string;

    @IsOptional()
    @IsString()
    @MinLength(6)
    @ApiProperty({
        description: 'Password of the user',
        example: 'password123'
    })
    readonly password?: string;
}
