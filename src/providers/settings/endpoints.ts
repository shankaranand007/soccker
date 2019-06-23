import { Settings } from './settings';

export class Endpoints {
  public static uri: any = {
    user: {
      info: Settings.AppUrl.basUrl + 'userservice/{0}',
      photo: Settings.AppUrl.basUrl + 'userservice/{0}/photo',
      search: Settings.AppUrl.basUrl + 'userservice?displayname={0}',
      preferences: Settings.AppUrl.basUrl + 'preferences/user/{0}',
    },
    trend: {
      list: Settings.AppUrl.trendUrl + 'trends?index={0}&limit={1}',
      getComment: Settings.AppUrl.trendUrl + "comments/{0}?index={1}&limit={2}",
      postComment: Settings.AppUrl.trendUrl + "comments/{0}",
      image: Settings.AppUrl.trendUrl + 's3/{0}?token={1}',
    },
    sap:{
      r3TokenURI: Settings.AppUrl.sapurl + 'ZR3_MASTER_DATA_SRV/',
    }
  };
}
