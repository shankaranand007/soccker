import { Config } from './config.interface';
export class DevConfig extends Config {
    public environment = 'dev';
    public basUrl = '/mobile-api/';
    public sapUrl = '/sap-api/';
    public imageUrl = "/image-api/";
    public trendUrl = 'https://trends-dev.iff.com/app-api/api/m1/';
    // public trendUrl = '/trend-api/';

    public oktaCredentials = {
      redirectUri: "http://localhost:8080",
      clientId: '0oa1foeshdeTba5ZW0h8',
      scope: 'openid profile email',
      issuer: 'https://iff.okta.com',
      requireHttps: false
    }

    public loginInterval = 20000; //33.33 mins
}
