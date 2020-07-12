import { RfServer } from '@rf-manager/data';
import SteamUser from 'steam-user';

export class RfService {
  private static instance: RfService;
  private steamClient: SteamUser;
  private loggedOn = false;

  private constructor() {
  }

  private login(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.steamClient = new SteamUser();
      const logonOptions = {};
      this.steamClient.logOn(logonOptions);

      this.steamClient.on('loggedOn', () => {
        this.loggedOn = true;
        resolve();
      });

    });
  }

  public static getInstance(): RfService {
    if (!RfService.instance) {
      RfService.instance = new RfService();
    }

    return RfService.instance;
  }

  public async getServersList(): Promise<RfServer[]> {
    if (!this.loggedOn) {
      await this.login();
    }
    return new Promise<RfServer[]>((resolve) =>
      this.steamClient.getServerList('\\appid\\365960', 2000, (err: any, servers: RfServer[]) => resolve(servers)));
  }
}
