import { Controller, Get, Query } from '@nestjs/common';
import { ApiFootballService } from './api-football.service';
import { GetPlayersQueryDto } from './dto/get-players.query.dto';
import { PlayerResponseDto } from './dto/get-players.response.dto';

@Controller('players')
export class PlayersController{
  constructor(private readonly apiFootballService: ApiFootballService) {}

  @Get()
  async getPlayer(@Query() query: GetPlayersQueryDto): Promise<PlayerResponseDto[]> {
    return this.apiFootballService.getPlayerStats(query);
  }
}