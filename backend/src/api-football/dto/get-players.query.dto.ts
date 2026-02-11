import {IsNotEmpty, IsNumberString, IsNumber, IsOptional, IsString} from 'class-validator';

export class GetPlayersQueryDto{
    @IsNumberString()
    league: number;

    @IsNumberString()
    season: number;

    @IsNumberString()
    playerId: number;
}