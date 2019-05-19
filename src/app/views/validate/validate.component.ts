import { ModalService } from './../../services/modal.service';
import { Component, OnInit } from '@angular/core';
import { ModalError, modalErrorInit } from 'src/app/models';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {
  showModal: boolean;
  modalError: ModalError;

  constructor(private modalService:ModalService) {
    this.modalService.casterrors.subscribe(val=>{
      this.modalError = val;
    })
   }

  ngOnInit() {
  
  }
  closeModal(){
    this.modalService.updateModalState({show:false, errors:[]})
  }
}
