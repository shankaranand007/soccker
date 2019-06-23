import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { AppBroadcast } from '../app-broadcast/app-broadcast';

export enum ConnectionStatusEnum {
  Online,
  Offline
}

@Injectable()
export class NetworkProvider {

  public previousStatus;

  constructor(
    private network: Network,
    private appBroadcast: AppBroadcast
  ) {
    this.previousStatus = ConnectionStatusEnum.Online;
  }

  public initializeNetworkEvents(): void {

    this.network.onDisconnect().subscribe(() => {
      if (this.previousStatus === ConnectionStatusEnum.Online) {
        this.appBroadcast.doCheckNetwork({type: 'internet_offline'});
      }
      this.previousStatus = ConnectionStatusEnum.Offline;
    });

    this.network.onConnect().subscribe(() => {
      if (this.previousStatus === ConnectionStatusEnum.Offline) {
        this.appBroadcast.doCheckNetwork({type: 'internet_online'});
      }
      this.previousStatus = ConnectionStatusEnum.Online;
    });
  }

}
