import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AppBroadcast {

  public userData = new Subject<any>();
  private _checkNetwork = new Subject();
  public checkNetwork = this._checkNetwork.asObservable();

  public doCheckNetwork(error) {
    this._checkNetwork.next(error);
  }

  constructor() { }
}
