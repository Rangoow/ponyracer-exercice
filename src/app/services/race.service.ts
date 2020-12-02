import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {RaceModel} from '../races/models/race.model';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(private apiService: ApiService) {
  }

  list(): Array<RaceModel> {
    return this.apiService.get('/races');
  }
}
