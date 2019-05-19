import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModalError, modalErrorInit } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  
  errors = new BehaviorSubject<ModalError>(modalErrorInit);
  casterrors = this.errors.asObservable();
  constructor() {}

  updateModalState(data:ModalError) {
    this.errors.next(data);
  }



}
