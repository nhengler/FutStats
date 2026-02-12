import {IsNotEmpty, IsNumberString, IsNumber, IsOptional, IsString} from 'class-validator';

export class GetPlayersQueryDto{
    @IsNumberString()
    player: string;
    
    @IsNumberString()
    league: string;

    @IsNumberString()
    season: string;
    
}