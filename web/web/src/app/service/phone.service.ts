import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../environments/environment.prod';
import { Phone } from '../model/phone';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  headers: HttpHeaders;

  constructor(private client: HttpClient) {
    this.headers = new HttpHeaders({ 'content-type': 'application/json' });
  }


  GetPhone(id: string): Observable<Phone> {
    return this.client.get<Phone>(env.apiUrl + "/phone/" + id);
  }

    UpdateUser(phone: Phone): Observable<HttpResponse<any>> {
    return this.client.put(env.apiUrl + "/phone/"+phone._id, JSON.stringify(phone), {
      headers: this.headers,
      observe: 'response',
    })
  }
  UpdatePhoneQuantity(id: string, newQuantity: number): Observable<HttpResponse<any>> {
    const updatedPhone = { p_qunittiy: newQuantity }; // Assuming your API expects an object with the new quantity field
    return this.client.put(env.apiUrl + "/phone/" + id, JSON.stringify(updatedPhone), {
      headers: this.headers,
      observe: 'response',
    });
  }

  // New method for searching phones
  SearchPhones(query: string): Observable<Phone[]> {
    return this.client.get<Phone[]>(env.apiUrl + `/phone/search/${query}`);
  }
}
