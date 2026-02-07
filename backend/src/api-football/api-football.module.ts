import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ApiFootballService } from './api-football.service';
import { ApiFootballController } from './api-football.controller';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://v3.football.api-sports.io',
      headers: {
        'x-apisports-key': process.env.API_FOOTBALL_KEY,
      },
    })
  ],
  providers: [ApiFootballService],
  exports: [ApiFootballService],
  controllers: [ApiFootballController],
})
export class ApiFootballModule {}
