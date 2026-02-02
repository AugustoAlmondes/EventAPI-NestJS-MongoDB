import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDate, IsNumber, MinLength } from 'class-validator';

export class CreateEventDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Name of the event',
        example: 'Music Concert'
    })
    readonly name: string;
    
    @IsDate()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Date of the event',
        example: '2024-12-31'
    })
    readonly date: Date;
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Hour of the event',
        example: 20
    })
    readonly hour: number;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(250)
    @ApiProperty({
        description: 'Description of the event',
        example: 'An exciting music concert featuring popular bands and artists...'
    })
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Value of the event',
        example: '100.00'
    })
    readonly value: number;
}
