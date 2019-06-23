import { Config } from './config.interface';
export class LocalConfig extends Config {
    public environment = 'local';
    public basUrl = '/mobile-api/';
    public sapUrl = '/sap-api/';
    public imageUrl = "/image-api/";
    // public trendUrl = 'https://trends-dev.iff.com/app-api/';
    public trendUrl = 'http://localhost:20100/api/m1/';

    public oktaCredentials = {
      redirectUri: "http://localhost:8080",
      clientId: '0oa1foeshdeTba5ZW0h8',
      scope: 'openid profile email',
      issuer: 'https://iff.okta.com',
      requireHttps: false
    }

    public loginInterval = 200000; //33.33 mins
}
