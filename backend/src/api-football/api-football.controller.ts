import { Controller, Get, Query } from '@nestjs/common';
import { ApiFootballService } from './api-football.service';

@Controller('api-football')
export class ApiFootballController {
  constructor(private readonly apiFootballService: ApiFootballService) {}
  
  @Get('players')
  async getPlayer(@Query('name') name: string, league: string, season: string) {
    return this.apiFootballService.getPlayerByLastName(name, league, season);
  }
}
