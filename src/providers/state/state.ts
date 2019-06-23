import { Injectable } from '@angular/core';

export interface InternalStateType {
  [key: string]: any;
}

@Injectable()
export class State {

  public data = {
    isLoggedIn: 'isLoggedIn',
    trends: 'trends',
    userInfo: 'userInfo',
    userid:'userid',
    deeplinks: 'deeplinks'
  };
  public _state: InternalStateType = {};
  constructor() { }

  // already return a clone of the current state
  public get state() {
    return this._state = this._clone(this._state);
  }

  public set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  public get(prop?: any) {
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : null;
  }

  public remove(prop?: any) {

    const state = this.state;
    if(state.hasOwnProperty(prop)) {
      delete state[prop];
    }
  }

  public set(prop: string, value: any) {
    return this._state[prop] = value;
  }

  public removeAll() {
    Object.keys(this._state).forEach(async (ele) => {
      this.remove(ele);
    });
  }
  private _clone(object: InternalStateType) {
    return JSON.parse(JSON.stringify(object));
  }
}
