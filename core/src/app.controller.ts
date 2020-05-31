import { Controller, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) { }

  @Post()
  async getDeveloperRank(@Body() techStack: TechStackDTO): Promise<string> {
    return await this.appService.getDeveloperRank(techStack.languages);
  }
}

export interface TechStackDTO {
  languages: string[];
}