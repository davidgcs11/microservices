import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('tech-rank')
  getDeveloperRank(data: string[]): number {
    return this.appService.getDeveloperRank(data);
  }
}
