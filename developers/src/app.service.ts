import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getDeveloperRank(knownLanguages: string[]): number {
    const techRank = (knownLanguages || []).reduce((prev, value) => {
      return prev + (value || '').length;
    }, 0);
    return techRank;
  }
}
