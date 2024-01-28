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
import { MatTableModule } from '@angular/material/table';


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
    MatTableModule,
    FormsModule

  ]
})
export class StopsFormComponent implements OnInit {
  zip: string = '';
  dataSource: any[] = [];
  displayedColumns: string[] = ['Zip Code', 'City', 'State', 'Dishwasher', 'Gas Dryer'];

  constructor(private stopsService: StopsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.stopsService.checkZip(this.zip).subscribe(
      (data: any) => {
        this.dataSource = [data];
        console.log(this.dataSource);
      },
      err => {
        console.log(err);
      }
    );

  }

}
