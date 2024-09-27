import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-bai2',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bai2.component.html',
  styleUrl: './bai2.component.css',
})
export class Bai2Component implements OnInit {
  employee: any[] = [];
  workingAge: any[] = [
    {
      age: 'Dưới 25',
      coefficient: 0.07,
    },
    {
      age: 'Từ 25 đến 40',
      coefficient: 0.1,
    },
    {
      age: 'Trên 40',
      coefficient: 0.15,
    },
  ];

  formEmployee = new FormGroup({
    fullname: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    birthday: new FormControl<string>('', [Validators.required]),
    gender: new FormControl<string>('Nam'),
    salary: new FormControl<number>(7000000, [
      Validators.required,
      Validators.min(7000000),
    ]),
    workAge: new FormControl<string>('', [Validators.required]),
    bonus: new FormControl<number>(0, [Validators.required]),
  });
  ADD(){
    let index = this.employee.push(this.formEmployee.value) -1
    this.bonus(index)
  }

  bonus(index: number){
    let sum = this.employee[index].workAge.coefficient*this.employee[index].salary
    if(this.formEmployee.controls.gender.value == 'Nữ'){
      sum += 200000
    }
    this.employee[index].bonus = sum
  }

  ngOnInit(): void {
      this.formEmployee.controls.workAge.setValue(this.workingAge[0])
  }

  Edit(index: number){
    this.id = index
    this.formEmployee.setValue(this.employee[index])
  }

  Delete(index: number){
    this.employee.splice(index, 1)
  }

  id:any
  Update(){
    this.employee[this.id]= this.formEmployee.value
  }

  isFieldInvalid(field: string): boolean | null {
    const control = this.formEmployee.get(field);
    return control && control.invalid && (control.dirty || control.touched);   }
}
