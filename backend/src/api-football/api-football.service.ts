import { Injectable, Search } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { GetPlayersQueryDto } from './dto/get-players.query.dto';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ApiFootballService {
  constructor(
    private readonly httpService: HttpService,
  ) {}

  async getPlayerByLastName(query: GetPlayersQueryDto) {
    const response = await lastValueFrom(
      this.httpService.get('/players', {
        params: query,
      }),
    )
    
    return response.data
  }
}
