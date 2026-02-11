import { Controller, Get, Query } from '@nestjs/common';
import { ApiFootballService } from './api-football.service';
import { GetPlayersQueryDto } from './dto/get-players.query.dto';

@Controller('api-football')
export class ApiFootballController {
  constructor(private readonly apiFootballService: ApiFootballService) {}
  
  @Get('players')
  async getPlayer(@Query() query: GetPlayersQueryDto) {
    return this.apiFootballService.getPlayer(query);
  }
}
