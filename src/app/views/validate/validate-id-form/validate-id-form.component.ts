import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: "app-validate-id-form",
  templateUrl: "./validate-id-form.component.html",
  styleUrls: ["./validate-id-form.component.scss"]
})
export class ValidateIdFormComponent implements OnInit {
  rForm: FormGroup;
  files: any[];
  constructor(private fb: FormBuilder) {}
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
  proccessdata(data) {
    console.log(data);
  }
  onFileSelect(event) {
    this.files = event.target.files;
    console.log(this.files);
    this.uploadDocument()
  }
  uploadDocument() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
    }
    fileReader.readAsText(this.files[0]);
}
}
