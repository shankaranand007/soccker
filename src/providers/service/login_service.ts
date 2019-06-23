import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(public http: HttpClient) { }

  public authenticate(user) {
    let fd = new FormData();
    fd.append('username', user.username);
    fd.append('password', user.password);
    return this.http.post('/auth/login', fd);
    //return this.http.get('./assets/mocks/login-res.mock.json');
  }
  public resetPassword(data) {
    let session = JSON.parse(sessionStorage.getItem('user-data'));
    let value = {
      "loginId": (session['loginId']) ? session['loginId'] : "",
      "oldPassword": (data.oldPassword) ? data.oldPassword : "",
      "newPassword": (data.newPassword) ? data.newPassword : ""
    }
    console.log('value', value);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.put('/api/users/resetPassword', value, { headers: headers })
  }
  public login(data){
      return this.http.post('/login',data)
  }
  public forget_password(data){
      return this.http.post('/password/sms',data)
  }
  public reset_password(data){
    //   return this.http.post('')
  }
  public otp(data){
      this.http.post('/password/sms',data)
  }
}