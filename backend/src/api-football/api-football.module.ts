import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApiFootballService } from './api-football.service';
import { ApiFootballController } from './api-football.controller';
import { PlayersController } from './players.controller';

@Module({
  imports: [
    ConfigModule,
    HttpModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        baseURL: configService.get<string>('API_FOOTBALL_BASE_URL'),
        headers: {
          'x-apisports-key': configService.get<string>('API_FOOTBALL_KEY'),
        },
      }),
    }),
  ],
  providers: [ApiFootballService],
  exports: [ApiFootballService],
  controllers: [ApiFootballController, PlayersController],
})
export class ApiFootballModule {}
