import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiFootballModule } from './api-football/api-football.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ApiFootballModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
