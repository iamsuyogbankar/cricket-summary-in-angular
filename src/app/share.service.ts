import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
readonly engJson = '../../assets/england.json';
readonly indJson = '../../assets/india.json';

  constructor( private httpClient: HttpClient) { }

  indData(): Observable<any>{
    return  this.httpClient.get(this.indJson);
  }

  engData(): Observable<any>{
    return this.httpClient.get(this.engJson);
  }
}
