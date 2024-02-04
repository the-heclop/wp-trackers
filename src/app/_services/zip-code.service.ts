import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ZipCodeService {
  baseUrl = "https://localhost:7097/";

  constructor(private http:HttpClient) {

   }

  checkZip(data: any): Observable<any> {
    return this.http.get(this.baseUrl + 'zip-check?zip=' + data);
  }

  checkHubAgent(data: any): Observable<any> {
    return this.http.get(this.baseUrl + 'site-check?site=' + data);
  }
}
