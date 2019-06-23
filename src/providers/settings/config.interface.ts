export abstract class Config {
  public environment = '';
  public basUrl = '';
  public sapUrl = '';
  public trendUrl = '';
  public oktaCredentials: any;
  public loginInterval: number;

}

export enum AppEnvironment {
  Dev,
  Prod,
  Local
}
