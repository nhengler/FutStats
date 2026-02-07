import {IsNotEmpty, IsNumberString, IsOptional, IsString} from 'class-validator';

export class GetPlayersQueryDto{
    @IsString()
    @IsNotEmpty()
    search: string;

    @IsNumberString()
    league: string;

    @IsNumberString()
    season: string;

    @IsString()
    team: string;

    @IsString()
    page: string;
}