export interface RfServer {
  addr: string;
  gameport: number;
  specport: number,
  steamid: SteamID;
  name: string;
  appid: number;
  gamedir: string,
  version: string;
  product: string;
  region: number;
  players: number;
  max_players: number;
  bots: number;
  map: string;
  secure: boolean;
  dedicated: boolean;
  os: string;
  gametype: any
}

export interface SteamID {
  universe: number;
  type: number;
  instance: number;
  accountid: number;
}
