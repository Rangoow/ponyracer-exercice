import {RaceService} from '../race.service';
import {Component, OnInit} from '@angular/core';
import {RaceModel} from '../models/race.model';

@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  races: Array<RaceModel> = [];

  constructor(private raceService: RaceService) {}

  ngOnInit(): void {
    this.raceService.list().subscribe(racesList => this.races = racesList);
  }
}
