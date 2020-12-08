import { Injectable } from '@angular/core';
import {RaceModel} from './races/models/race.model';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor() {
  }

  races: Array<RaceModel> = [
    {name: 'Lyon'},
    {name: 'Los Angeles'},
    {name: 'Sydney'},
    {name: 'Tokyo'},
    {name: 'Casablanca'}
  ];

  list(): Array<RaceModel> {
    return this.races;
  }
}
