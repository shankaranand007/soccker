import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';
import { Platform } from 'ionic-angular';

@Injectable()
export class StorageProvider {

  public data = {
    isTouchid: 'istouchid',
    userInfo: 'userinfo',
    skipIntro: 'skipintropage',
    accessToken: 'accessToken',
    idToken: 'idToken',
    username: 'username',
    password: 'password',
    MFAAnswer: 'MFAAnswer',
    test: 'test'
  };

  public secureStorageObject: SecureStorageObject;


  constructor(
    private secureStorage: SecureStorage,
    private platform: Platform,
    private storage: Storage
  ) { }


  private isCordovaPlatform() {
    return this.platform.is('cordova');
  }

  private async setSecureStorage() {
    this.secureStorageObject = await this.secureStorage.create('iff_crs');
  }

  async get(key) {
    if (!this.isCordovaPlatform()) {
      return await this.storage.get(key);
    }

    await this.setSecureStorage();

    try {
      let data = await this.secureStorageObject.get(key);
      try {
        return JSON.parse(data);
      } catch (err) {
        return data;
      }
    } catch (err) {
      return ''
    }

  }

  async set(key, value) {
    if (!this.isCordovaPlatform()) {
      return await this.storage.set(key, value);
    }

    await this.setSecureStorage();

    try {
      if(typeof value  === 'object'){
        value = JSON.stringify(value);
      }
      return await this.secureStorageObject.set(key, value);
    } catch (err) {
      return ''
    }

  }

  async remove(key) {
    if (!this.isCordovaPlatform()) {
      return await this.storage.remove(key);
    }

    await this.setSecureStorage();

    try {
      return await this.secureStorageObject.remove(key);
    } catch (err) {
      return ''
    }

  }

  removeAll() {
    Object.keys(this.data).forEach(ele => {
      this.remove(this.data[ele]);
    });
  }
}
