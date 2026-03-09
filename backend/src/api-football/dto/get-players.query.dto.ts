import { IsNumberString } from 'class-validator';

export class GetPlayersQueryDto {
  @IsNumberString()
  id: string;

  @IsNumberString()
  team: string;

  @IsNumberString()
  season: string;
}
