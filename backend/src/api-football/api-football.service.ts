import { Injectable, Search } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';

@Injectable()
export class ApiFootballService {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.get<string>('API_FOOTBALL_BASE_URL')!;
    this.apiKey = this.configService.get<string>('API_FOOTBALL_KEY')!;
  }

  async getPlayerByLastName(playerLastName: string, league: string, season: string) {
    const config: AxiosRequestConfig = {
      headers: {
        'x-apisports-key': this.apiKey,
      },

      params: {
        search: playerLastName, 
        league,
        season,
      },
    };

    const response = await this.httpService.axiosRef.get(
      `${this.baseUrl}/players`,
      config,
    );

    return response.data
  }
}
