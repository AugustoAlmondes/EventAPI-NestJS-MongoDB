import { IsString, IsDate, IsNumber, MinLength, IsOptional } from 'class-validator';

export class UpdateEventDto {
    @IsOptional()
    @IsString()
    readonly name?: string;

    @IsOptional()
    @IsDate()
    readonly date?: Date;

    @IsOptional()
    @IsNumber()
    readonly hour?: number;

    @IsOptional()
    @IsString()
    @MinLength(250)
    readonly description?: string;

    @IsOptional()
    @IsNumber()
    readonly value?: number;
}
