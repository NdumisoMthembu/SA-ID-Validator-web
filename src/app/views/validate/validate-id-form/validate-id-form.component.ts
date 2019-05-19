import { ModalService } from "./../../../services/modal.service";
import { ValidateService } from "./../../../services/validate.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: "app-validate-id-form",
  templateUrl: "./validate-id-form.component.html",
  styleUrls: ["./validate-id-form.component.scss"]
})
export class ValidateIdFormComponent implements OnInit {
  rForm: FormGroup;
  files: any[] = [];
  dataFromFiles: String[] = [];
  constructor(
    private fb: FormBuilder,
    private validateService: ValidateService,
    private modalService: ModalService
  ) {}
  ngOnInit() {
    this.rForm = this.fb.group({
      files: null,
      idNumbers: this.fb.array([])
    });
    this.addNewId();
    this.rForm.valueChanges.subscribe(data => {
      console.log(data);
    });
  }
  get formValues() {
    return this.rForm.controls;
  }

  get formIds() {
    return this.rForm.get("idNumbers") as FormArray;
  }
  addNewId() {
    const id = this.fb.group({
      IdNumber: ""
    });
    this.formIds.push(id);
  }
  deleteId(i) {
    this.formIds.removeAt(i);
  }
  proccessdata() {
    for (let i = 0; i < this.files.length; i++) {
      debugger;
      if (this.files[0].size > 5 * 1024 * 1024) {
        this.modalService.updateModalState({
          show: true,
          errors: ["The total upload file size should not exceed 5MB."]
        });
      } else {
        this.parseFile(this.files[i]);
      }
    }

    //data from the form
    let formData = this.formValues.idNumbers.value;
    formData.map(x => this.pushToFilesData(x.IdNumber));
    if (this.dataFromFiles.length == 0) return false;

    console.log("file data", this.dataFromFiles);
    this.validateService
      .sendForValidations(this.dataFromFiles)
      .subscribe(response => {
        console.log(response);
        this.validateService.updateValidationState(response);
      });
  }
  onFileSelect(event) {
    this.files = event.target.files;
  }
  parseFile(file) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      let lines = (fileReader.result as string).split("\n");
      console.log("lines", lines);
      lines.map(r => this.pushToFilesData(r));
    };
    fileReader.readAsText(file);
  }
  pushToFilesData(data) {
    if (this.dataFromFiles.filter(x => x == data).length > 0 || data == "")
      return false;
    this.dataFromFiles.push(data);
  }
}
