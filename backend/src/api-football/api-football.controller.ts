import { Controller, Get, Query } from '@nestjs/common';
import { ApiFootballService } from './api-football.service';
import { GetPlayersQueryDto } from './dto/get-players.query.dto';
import { PlayerResponseDto } from './dto/get-players.response.dto';

@Controller('api-football')
export class ApiFootballController {
  constructor(private readonly apiFootballService: ApiFootballService) {}
}



 
