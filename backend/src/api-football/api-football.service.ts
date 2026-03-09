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
      const stats =
        item.statistics?.find((s) => s.team?.id === Number(query.team)) ??
        item.statistics?.[0];

      console.log('team pedido:', query.team);

      console.log(
        'teams disponíveis:',
        item.statistics?.map((s) => ({
          id: s.team?.id,
          name: s.team?.name,
        })),
      );

      return {
        goals: stats?.goals?.total ?? 0,
        assists: stats?.goals?.assists ?? 0,
        dribbles: stats?.dribbles?.success ?? 0,
        passes: stats?.passes?.total ?? 0,
        chances: stats?.passes?.key ?? 0,
        minutes: stats?.games?.minutes ?? 0,
      };
    });
  }
}
