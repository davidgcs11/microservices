import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport, ClientOptions } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private clientProxy: ClientProxy;

  constructor() {
    const clientConfig: ClientOptions = { transport: Transport.TCP, options: { host: '127.0.0.1', port: 3001 } };
    this.clientProxy = ClientProxyFactory.create(clientConfig);
  }

  async getDeveloperRank(languages: string[]): Promise<string> {
    const techRank = await this.clientProxy.send<number, string[]>('tech-rank', languages).toPromise();
    return techRank > 10 ? `Nice your techRank is ${techRank} 😎` : `Your techRank is ${techRank} 😥`;
  }
}
