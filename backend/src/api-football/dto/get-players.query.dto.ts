import {IsNotEmpty, IsNumberString, IsNumber, IsOptional, IsString} from 'class-validator';

export class GetPlayersQueryDto{
    @IsNumberString()
    player: string;
    
    @IsNumberString()
    teamId: string;
    
    @IsNumberString()
    teamName: string;
    
    @IsNumberString()
    league: string;

    @IsNumberString()
    season: string;

    @IsString()
    search: string;

    @IsString()
    page: string;
    
}