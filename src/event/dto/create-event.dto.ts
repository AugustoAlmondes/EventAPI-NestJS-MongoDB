import { IsString, IsNotEmpty, IsDate, IsNumber, MinLength } from 'class-validator';

export class CreateEventDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsDate()
    @IsNotEmpty()
    readonly date: Date;

    @IsNumber()
    @IsNotEmpty()
    readonly hour: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(250)
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    readonly value: number;
}
