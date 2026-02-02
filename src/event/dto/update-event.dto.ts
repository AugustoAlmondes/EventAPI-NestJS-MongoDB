import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsNumber, MinLength, IsOptional } from 'class-validator';

export class UpdateEventDto {
    @IsOptional()
    @ApiProperty({
        description: 'Name of the event',
        example: 'Music Concert',
    })
    @IsString()
    readonly name?: string;

    @IsOptional()
    @ApiProperty({
        description: 'Date of the event',
        example: '2024-12-31',
    })
    @IsDate()
    readonly date?: Date;

    @IsOptional()
    @ApiProperty({
        description: 'Hour of the event',
        example: 20,
    })
    @IsNumber()
    readonly hour?: number;

    @IsOptional()
    @ApiProperty({
        description: 'Description of the event',
        example: 'An exciting music concert featuring popular bands and artists...' ,
    })
    @IsString()
    @MinLength(250)
    readonly description?: string;

    @IsOptional()
    @ApiProperty({
        description: 'Value of the event',
        example: '100.00',
    })
    @IsNumber()
    readonly value?: number;
}
