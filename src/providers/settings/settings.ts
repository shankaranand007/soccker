
import { Config, AppEnvironment } from './config.interface';
import { DevConfig } from './dev-config'
import { ProdConfig } from './prod-config'
import { LocalConfig } from './local-config';

export class Settings {

  public static Env: AppEnvironment = AppEnvironment.Dev;
  public static EnvValue: Config = Settings.config();
  public static AppEnv: string = Settings.EnvValue.environment; // 'dev',  prd;
  public static AppName: string = 'MOBI SEED';
  public static AppVersion: string = '0.0.1';
  public static AppIdentifier: string = Settings.AppEnv + Settings.AppName + Settings.AppVersion;
  public static isOktaRequired = false;
  public static AppUrl = {
    basUrl: Settings.EnvValue.basUrl,
    sapurl: Settings.EnvValue.sapUrl,
    trendUrl: Settings.EnvValue.trendUrl
  };

  public static config(): Config {
    switch (Settings.Env) {

      case AppEnvironment.Dev:
        return new DevConfig();

      case AppEnvironment.Prod:
        return new ProdConfig();
        case AppEnvironment.Local:
        return new LocalConfig();
    }
  }
}
