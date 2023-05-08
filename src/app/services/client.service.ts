import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clients } from '../interfaces/client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private httpClient : HttpClient) { }

  getClient(): Observable<Clients> {
    return this.httpClient.get<Clients>("https://jsonplaceholder.typicode.com/users")
  }

}
