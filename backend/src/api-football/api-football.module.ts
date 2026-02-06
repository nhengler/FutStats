import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ApiFootballService } from './api-football.service';
import { ApiFootballController } from './api-football.controller';

@Module({
  imports: [HttpModule],
  providers: [ApiFootballService],
  exports: [ApiFootballService],
  controllers: [ApiFootballController],
})
export class ApiFootballModule {}
