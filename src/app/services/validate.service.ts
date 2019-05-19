import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../shared/config';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {


  constructor(private http: HttpClient) {}

sendForValidations(data): Observable<any[]> {
  return this.http.post<any>(`${API_URL}/api/Validate`, data);
}
getValidations(): Observable<any> {
  return this.http.get<any>(`${API_URL}/api/Validate`);
}

}
