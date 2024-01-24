import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { StopsService } from '../_services/stops.service';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-stops-form',
  templateUrl: './stops-form.component.html',
  styleUrls: ['./stops-form.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,

  ]
})
export class StopsFormComponent implements OnInit {


  constructor(private stopsService:StopsService) { }

  ngOnInit(): void {
  }

  stopsForm = new FormGroup({
    zipCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5}$')])
  });

  onSubmit() {
    this.stopsService.putStops(this.stopsForm.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

}
