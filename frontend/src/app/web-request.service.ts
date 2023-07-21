import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:8000/api';
  }

  get(uri: string, token: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`, { headers: { 'x-access-token': token}});
  }

  post(uri: string, payload: Object, token: string) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload, { headers: { 'x-access-token': token}});
  }

  put(uri: string, payload: Object, token: string) {
    return this.http.put(`${this.ROOT_URL}/${uri}`, payload, { headers: { 'x-access-token': token}});
  }

  delete(uri: string, token: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`, { headers: { 'x-access-token': token}});
  }

  login(email: string, password: string) {

    return this.http.post(`${this.ROOT_URL}/signin`, {
      email,
      password
    }, {
        observe: 'response'
      });
  }

  signup(email: string, password: string) {
    return this.http.post(`${this.ROOT_URL}/signup`, {
      email,
      password
    }, {
        observe: 'response'
      });
  }


}