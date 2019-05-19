import { ModalService } from './../../../services/modal.service';
import { Component, OnInit } from "@angular/core";
import { ValidateService } from "src/app/services/validate.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-validate-results",
  templateUrl: "./validate-results.component.html",
  styleUrls: ["./validate-results.component.scss"]
})
export class ValidateResultsComponent implements OnInit {
  valdaions$: Observable<any[]>;
  reasons: string[] = [];
  searchText=1; //show all
  constructor(private validateService: ValidateService, private modalService:ModalService) {
   this.validateService.getValidations().subscribe(r=>{
     this.validateService.updateValidationState(r)
   })
  }

  ngOnInit() {
    this.valdaions$  = this.validateService.castValidations;
  }
  moreReasons(data: string[]) {
    this.modalService.updateModalState({show:true, errors:data})
  }
}
