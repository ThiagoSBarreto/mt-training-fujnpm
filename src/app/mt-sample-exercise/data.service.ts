import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Farm } from './farm';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getJsonData() {
    return this.http
      .get<Farm[]>('assets/mock-data.json')
      .toPromise()
      .then((resp) => {
        return resp;
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  getJsonDataException() {
    return this.http
      .get<Farm[]>('assetss/mock-data.json')
      .toPromise()
      .then((resp) => {
        return resp;
      })
      .catch((err) => {
        throw new Error(err);
      });
  }
}
