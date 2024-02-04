import { ZipCodeService } from '../_services/zip-code.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-zip-form',
  templateUrl: './zip-form.component.html',
  styleUrls: ['./zip-form.component.css'],
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
export class ZipFormComponent implements OnInit {
  zip: string = '';
  hubAgent: string = '';
  zipError: string = '';
  isSubmitted = false;

  dataSource: any[] = [];
  displayedColumns: string[] = ['Zip Code', 'Site Code', 'Hub/Agent', 'Gas Dryer', 'Gas Range', 'Dishwasher', 'OTR Microwave'];

  constructor(private ZipCodeService: ZipCodeService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.ZipCodeService.checkZip(this.zip).subscribe(
      (data: any) => {
        this.dataSource = [data];
        this.isSubmitted = true;
      },
      (err: HttpErrorResponse) => {
        if (err.status === 404) {
          this.zipError = 'Invalid zip code';
          console.log(this.zipError);
        } if (err.status === 500) {
          this.zipError = 'Server error';
          console.log(this.zipError);
        } else {
          console.log(err);
        }

      }
    );
  }

  // hubAgentCheck() {
  //   this.ZipCodeService.checkHubAgent(this.hubAgent).subscribe(
  //     (data: any) => {
  //       this.dataSource = data;
  //       this.isSubmitted = true;
  //       console.log(this.hubAgent);
  //     },
  //     (err: HttpErrorResponse) => {
  //       if (err.status === 404) {
  //         this.zipError = 'Invalid hub/agent';
  //         console.log(this.zipError);
  //       } if (err.status === 500) {
  //         this.zipError = 'Server error';
  //         console.log(this.zipError);
  //       } else {
  //         console.log(err);
  //       }

  //     }
  //   );
  // }

  hubAgentCheck(){
  this.ZipCodeService.checkHubAgent(this.hubAgent).subscribe({
    next: (data) => {
      console.log(data);
      this.dataSource = data;
      this.isSubmitted = true;
    },
    error: (err) => {
      if (err.status === 404) {
        this.zipError = 'Invalid hub/agent';
        console.log(this.zipError);
      } if (err.status === 500) {
        this.zipError = 'Server error';
        console.log(this.zipError);
      } else {
        console.log(err);
      }
    },
    complete: () => console.info('complete')
   })
  }

}
