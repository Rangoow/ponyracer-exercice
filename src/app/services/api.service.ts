import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
  })
export class ApiService {
  // @ts-ignore
  get(path: string): Array<any> {
    return [path];
  // to do call the backend API
  }
}
