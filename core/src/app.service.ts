import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport, ClientOptions } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private clientProxy: ClientProxy;

  constructor() {
    const clientConfig: ClientOptions = { transport: Transport.REDIS, options: { url: 'redis://redis:6379' } };
    this.clientProxy = ClientProxyFactory.create(clientConfig);
  }

  async getDeveloperRank(languages: string[]): Promise<string> {
    const techRank = await this.clientProxy.send<number, string[]>('tech-rank', languages).toPromise();
    return techRank > 10 ? `Nice your techRank is ${techRank} 😎` : `Your techRank is ${techRank} 😥`;
  }
}
