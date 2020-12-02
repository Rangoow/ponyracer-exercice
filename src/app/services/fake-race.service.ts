import { Injectable } from '@angular/core';
import { RaceModel } from '../races/models/race.model';

@Injectable({
  providedIn: 'root'
})
export class FakeRaceService{
  list(): Array<RaceModel>{
    return [{ name: 'London' }];
  }
}
