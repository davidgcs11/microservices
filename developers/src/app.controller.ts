import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload, Ctx, RedisContext } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('tech-rank')
  getDeveloperRank(@Payload() data: string[], @Ctx() context: RedisContext): number {
    new Logger('RedisTest').log(context);
    return this.appService.getDeveloperRank(data);
  }
}
