import { Injectable, Search } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { GetPlayersQueryDto } from './dto/get-players.query.dto';
import { lastValueFrom } from 'rxjs';
import { PlayerResponseDto } from './dto/get-players.response.dto';

@Injectable()
export class ApiFootballService {
  constructor(
    private readonly httpService: HttpService,
  ) {}

  async getPlayerStats(query: GetPlayersQueryDto): Promise<PlayerResponseDto[]> {
    const {data} = await lastValueFrom (this.httpService.get('/players/statistics', {
      params: query,
    }));
    
    console.log('Parâmetros enviados:', data.parameters); //testing
    console.log('Resultados encontrados:', data.results); //testing


    if (!data.response || data.response.length === 0) {
      console.log('Nenhum dado encontrado para:', query);
      return []
    };
    
    return data.response.map((item)=>({
    goals: item.statistics?.[0]?.goals?.total,
    assists: item.statistics?.[0]?.goals?.assists,
    dribbles: item.statistics?.[0]?.dribbles?.success,
    passes: item.statistics?.[0]?.passes?.total,
    chances: item.statistics?.[0]?.passes?.key,
    minutes: item.statistics?.[0]?.games?.minutes
    }))
  }
}

