import {RaceModel} from './models/race.model';
import {RaceService} from '../race.service';
import {Component} from '@angular/core';

@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent {

  constructor(private raceService: RaceService) { }

  races: Array<RaceModel> = [];

  list(): Array<RaceModel>{
    return this.races = this.raceService.list();
  }
}
