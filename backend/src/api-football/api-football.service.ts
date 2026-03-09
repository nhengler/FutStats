import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { GetPlayersQueryDto } from './dto/get-players.query.dto';
import { PlayerResponseDto } from './dto/get-players.response.dto';

@Injectable()
export class ApiFootballService {
  constructor(private readonly httpService: HttpService) {}

  async getPlayerStats(
    query: GetPlayersQueryDto,
  ): Promise<PlayerResponseDto[]> {
    const { data } = await lastValueFrom(
      this.httpService.get('/players', {
        params: {
          id: query.id,
          season: query.season,
        },
      }),
    );

    console.log('errors:', data.errors);

    return data.response.map((item) => {

      const teamStats = item.statistics?.filter(
        (s) => s.team?.id === Number(query.team)
      ) ?? [];
    
      const totals = teamStats.reduce(
        (acc, s) => {
          acc.goals += s.goals?.total ?? 0;
          acc.assists += s.goals?.assists ?? 0;
          acc.dribbles += s.dribbles?.success ?? 0;
          acc.passes += s.passes?.total ?? 0;
          acc.chances += s.passes?.key ?? 0;
          acc.minutes += s.games?.minutes ?? 0;
          return acc;
        },
        {
          goals: 0,
          assists: 0,
          dribbles: 0,
          passes: 0,
          chances: 0,
          minutes: 0,
        }
      );
    
      return totals;
    });
  }
}
