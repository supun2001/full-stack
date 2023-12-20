import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  headers: HttpHeaders;

  constructor(private client: HttpClient) {
    this.headers = new HttpHeaders({ "content-type": "application/json" });
  }

  Getemployees(): Observable<Employee[]> {
    return this.client.get<Employee[]>(env.apiUrl + "/emp");
  }

  Getemployee(id: string): Observable<Employee> {
    return this.client.get<Employee>(env.apiUrl + "/emp/" + id);
  }

  Addemployee(employee: Employee): Observable<HttpResponse<any>> {
    return this.client.post<HttpResponse<any>>(env.apiUrl + "/emp", JSON.stringify(employee), {
      headers: this.headers,
      observe: 'response',
    });
  }
  Updateemployee(employee: Employee): Observable<HttpResponse<any>> {
    return this.client.put(env.apiUrl + "/emp/"+employee._id, JSON.stringify(employee), {
      headers: this.headers,
      observe: 'response',
    })
  }
  Deleteemployee(id: string): Observable<HttpResponse<any>> {
    return this.client.delete<HttpResponse<any>>(env.apiUrl + "/emp/" + id);
  }

}
