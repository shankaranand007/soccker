import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { OAuthService } from 'angular-oauth2-oidc';

import { Settings } from '../settings/settings';
import { State } from '../state/state';
import { Endpoints } from '../settings/endpoints';

@Injectable()
export class Request {

  constructor(
    private http: HttpClient,
    private state: State,
    private oAuthSvc: OAuthService,
  ) { }

  get(qry: string, prm: any[]) {
    let aQry = this.formatQuery(qry, prm);
    return this.http.get<any[]>(aQry, this.getOptions());
  }

  post(qry: string, prm: any[], data: any) {
    let aQry = this.formatQuery(qry, prm);
    return this.http.post<any[]>(aQry, data, this.getOptions())
  }

  put(qry: string, prm: any[], data: any) {
    let aQry = this.formatQuery(qry, prm);
    return this.http.put<any[]>(aQry, data, this.getOptions())
  }

  delete(qry: string, prm: any[]) {
    let aQry = this.formatQuery(qry, prm);
    return this.http.delete<any[]>(aQry, this.getOptions());
  }

  postToSap(qry: string, prm: any[], data: any) {

    let sapHeaders = {
      'Content-Type': 'application/json',
      'X-CSRF-Token': 'Fetch',
      'Accept': 'application/json'
    };

    let sapUrl = Endpoints.uri.sap.r3TokenURI;

    return this.http.get(sapUrl, { headers: sapHeaders, observe: 'response' }).switchMap((result: any) => {
      let sapPostHeaders = {
        'Content-Type': 'application/json',
        'X-CSRF-Token': result.headers.get("x-csrf-token"),
        'Accept': 'application/json'
      };
      let postoptions = { headers: sapPostHeaders };
      let aQry = this.formatQuery(qry, prm);
      return this.http.post<any[]>(aQry, data, postoptions);
    });
  }

  private formatQuery(qry: string, prm: string[]) {

    let theString = arguments[0];
    if (arguments.length !== 2) {
      return theString;
    }

    let theParams = arguments[1];
    for (let i = 0; i < theParams.length; i++) {
      if (theParams[i] !== undefined && theParams[i] !== null) {
        // tslint:disable-next-line:quotemark
        let regEx = new RegExp("\\{" + i + "\\}", "gm");
        theString = theString.replace(regEx, theParams[i]);
      }
    }
    return theString;
  }

  private getOptions() {
    let heads = {
      "Cache-control": 'no-cache,no-store',
      'Expires': '0',
      'Pragma': 'no-cache',
      'x-access-token': this.getToken(),
      'x-userid': this.getId()
    };
    return { headers: heads };
  }

  public getToken() {
    let token = this.oAuthSvc.getIdToken();
    token = token ? token : '';
    return Settings.isOktaRequired ? token : 'test';
  }

  public getId() {
    return this.state.get(this.state.data.userid) ? this.state.get(this.state.data.userid) : '';
  }

  public getSAPData(qry: string, prm: string[]): Observable<any> {
    let heads = {
      'accept': 'application/json',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Authorization': 'Basic QUxFUkVNT1RFOlN5c2FkbWluMQ==',
      'Access-Control-Allow-Origin': '*',
      'x-userid': this.getId()
    };
    let options = { headers: heads, withCredentials: true };
    let aQry = this.formatQuery(qry, prm);
    let response = this.http.get(aQry, options);

    return response;
  }

  public getImageUrl(qry: string, prm: any[]) {
    return this.formatQuery(qry, prm);
  }
}
