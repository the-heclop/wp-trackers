import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StopsService {
  baseUrl = "https://localhost:7097/";

  constructor(private http:HttpClient) {

   }

  putStops(data: any) {
    return this.http.post(this.baseUrl + 'stops', data);
  }
}
