import { Config } from './config.interface';
export class ProdConfig extends Config {
    public environment = 'prd';
    public basUrl = 'https://dev2-puma.iff.com/app-api/api/m1/';
    public sapUrl = 'http://sapqgw.iff.com:8000/sap/opu/odata/sap/';
    public trendUrl = 'https://trends-dev.iff.com/app-api/api/m1/';

    public oktaCredentials = {
      redirectUri: "http://localhost:8080",
      clientId: '0oa1foeshdeTba5ZW0h8',
      scope: 'openid profile email',
      issuer: 'https://iff.okta.com',
      requireHttps: false
    }

    public loginInterval = 200000; //33.33 mins
}
