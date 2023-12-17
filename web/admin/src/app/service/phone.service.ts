import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Phone } from '../model/phone';
@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  headers: HttpHeaders;
  constructor(private client: HttpClient) {
    this.headers = new HttpHeaders({ "content-type": "application/json" });
  }

  GetPhones(): Observable<Phone[]> {
    return this.client.get<Phone[]>(env.apiUrl + "/phone");
  }

  GetPhone(id: string): Observable<Phone> {
    return this.client.get<Phone>(env.apiUrl + "/phone/" + id);
  }

  AddPhone(phone: Phone): Observable<HttpResponse<any>> {
    return this.client.post<HttpResponse<any>>(env.apiUrl + "/phone", JSON.stringify(phone), {
      headers: this.headers,
      observe: 'response',
    });
  }
  UpdateUser(phone: Phone): Observable<HttpResponse<any>> {
    return this.client.put(env.apiUrl + "/phone/"+phone._id, JSON.stringify(phone), {
      headers: this.headers,
      observe: 'response',
    })
  }
  DeleteUser(id: string): Observable<HttpResponse<any>> {
    return this.client.delete<HttpResponse<any>>(env.apiUrl + "/phone/" + id);
  }
}
