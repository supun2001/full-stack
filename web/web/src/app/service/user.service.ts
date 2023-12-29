import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { environment as env} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
headers: HttpHeaders;
    constructor(private client: HttpClient) {
    this.headers = new HttpHeaders({ "content-type": "application/json" });
  }
  login(username: string, password: string): Observable<HttpResponse<any>> {
  const credentials = { username, password };

  return this.client.post<HttpResponse<any>>(env.apiUrl + '/user/login',JSON.stringify(credentials),
    {
      headers: this.headers,
      observe: 'response',
    }
  );
}


  AddUser(user: User): Observable<HttpResponse<any>> {
    return this.client.post<HttpResponse<any>>(env.apiUrl + "/user", JSON.stringify(user), {
      headers: this.headers,
      observe: 'response',
    });
  }
}
