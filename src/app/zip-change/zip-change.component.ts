import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ZipCodeService } from '../_services/zip-code.service';

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
  ]
})
export class ZipChangeComponent {
  editForm: FormGroup;
  dataSource: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient, private zipService: ZipCodeService) {
    this.editForm = this.fb.group({
      zip: ['', Validators.required],
      gasDryer: ['', Validators.required],
      gasRange: ['', Validators.required],
      dishwasher: ['', Validators.required],
      otrMicrowave: ['', Validators.required],
    })
  }

  onSubmit() {
    console.log(this.editForm.value)
    this.zipService.updateZip(this.editForm.value).subscribe({
      next: (data) => {
        console.log(this.editForm.value)
      },
      error: (err) => {
        console.log(err)
      },
      complete:() => console.info('complete')
    })
  }

}
