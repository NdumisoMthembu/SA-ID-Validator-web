import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { API_URL } from "../shared/config";
import { IdNumberDetails } from '../models';

@Injectable({
  providedIn: "root"
})
export class ValidateService {
  
  validations = new BehaviorSubject<IdNumberDetails[]>(null);
  castValidations = this.validations.asObservable();
  constructor(private http: HttpClient) {}

  updateValidationState(data:IdNumberDetails[]) {
    this.validations.next(data);
  }

  sendForValidations(data): Observable<any[]> {
    return this.http.post<any>(`${API_URL}/api/Validate`, data);
  }
  getValidations(): Observable<any> {
    return this.http.get<any>(`${API_URL}/api/Validate`);
  }
}
