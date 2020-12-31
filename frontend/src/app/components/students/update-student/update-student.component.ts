import { Student } from './../../../model/student';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetStudentForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  studentForm: FormGroup;
  subjectArray: Subject[] = [];
  SectioinArray: any = ['A', 'B', 'C', 'D', 'E'];
  studetObj = new Student();

  ngOnInit() {
    this.updateBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private studentApi: StudentsService,
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.studentApi.GetStudent(id).subscribe(data => {
      const sData = data[0];
      this.subjectArray = sData.subjects = sData.subjects.split(',').map(value => ({ name: value }));
      this.studentForm = this.fb.group({
        name: [sData.name, [Validators.required]],
        email: [sData.email, [Validators.required]],
        section: [sData.section, [Validators.required]],
        subjects: [sData.subjects],
        dob: [sData.dob, [Validators.required]],
        gender: [sData.gender]
      })
    })
  }

  /* Reactive book form */
  updateBookForm() {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      section: ['', [Validators.required]],
      subjects: [this.subjectArray],
      dob: ['', [Validators.required]],
      gender: ['Male']
    })
  }

  /* Add dynamic languages */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    if ((value || '').trim() && this.subjectArray.length < 5) {
      this.subjectArray.push({ name: value.trim() })
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /* Remove dynamic languages */
  remove(subject: Subject): void {
    const index = this.subjectArray.indexOf(subject);
    if (index >= 0) {
      this.subjectArray.splice(index, 1);
    }
  }

  /* Date */
  formatDate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.studentForm.get('dob').setValue(convertDate, {
      onlyself: true
    })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.studentForm.controls[controlName].hasError(errorName);
  }

  /* Update book */
  updateStudentForm() {
    this.studetObj = this.studentForm.value;
    var id = this.studetObj.id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.studentApi.UpdateStudent(id, this.studetObj).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/students'))
      });
    }
  }

}
