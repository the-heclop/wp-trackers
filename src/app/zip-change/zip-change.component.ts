import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ZipCodeService } from '../_services/zip-code.service';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-zip-change',
  templateUrl: './zip-change.component.html',
  styleUrls: ['./zip-change.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule
  ]
})
export class ZipChangeComponent implements OnInit{
  editForm: FormGroup;
  restrictionList: any[] = [];
  zipError: string;
  successMessage= false;

  ngOnInit() {
    this.getApplianceRestrictions();
  }

  constructor(private fb: FormBuilder, private zipService: ZipCodeService) {
    this.zipError = '';

    this.editForm = this.fb.group({
      zip: ['', Validators.required],
      gasDryer: [''],
      gasRange: [''],
      dishwasher: [''],
      otrMicrowave: [''],
    })
  }

  onSubmit() {
    if (this.editForm.valid) {
      this.zipService.updateZip(this.editForm.value).subscribe({
        next: (response) => {
          this.zipError = '';
          this.successMessage = false;
        },
        error: (err) => {
          if (err.status === 400) {
            this.zipError = 'Invalid Zip Code';
            console.log(this.zipError);
          } else if (err.status === 500) {
            this.zipError = 'Server Error';
            console.log(this.zipError);
          } else if (err.status === 200) {
            this.zipError = 'Zip Code Updated';
          }
        },
        complete:() => {
          this.editForm.reset();
          this.successMessage = true;
        }
      })
    } else {
      this.zipError = 'Please enter a zip code';
    }
  }

  getApplianceRestrictions() {
    this.zipService.getApplianceRestrictions().subscribe({
      next: (response: any[]) => {
        this.restrictionList = response;
        console.log(this.restrictionList);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
