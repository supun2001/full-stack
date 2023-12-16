import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers: HttpHeaders;

  constructor(private client: HttpClient) {
    this.headers = new HttpHeaders({ "content-type": "application/json" });
  }

  GetUsers(): Observable<User[]> {
    return this.client.get<User[]>(env.apiUrl + "/user");
  }

  GetUser(id: string): Observable<User> {
    return this.client.get<User>(env.apiUrl + "/user/" + id);
  }

  AddUser(user: User): Observable<HttpResponse<any>> {
    return this.client.post<HttpResponse<any>>(env.apiUrl + "/user", JSON.stringify(user), {
      headers: this.headers,
      observe: 'response',
    });
  }
  UpdateUser(user: User): Observable<HttpResponse<any>> {
    return this.client.put(env.apiUrl + "/user/"+user._id, JSON.stringify(user), {
      headers: this.headers,
      observe: 'response',
    })
  }
  DeleteUser(id: string): Observable<HttpResponse<any>> {
    return this.client.delete<HttpResponse<any>>(env.apiUrl + "/user/" + id);
  }
}
